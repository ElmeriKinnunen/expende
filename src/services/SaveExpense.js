import React, { Component } from 'react';
import { render } from 'sass';
import AddExpense from '../components/AddExpense';

class SaveExpense extends Component {
    constructor(props) {
        console.log('errr');
        super(props);
        this.state = {expense: [], open: false, message: ' '};
    }

    saveExpense = newExpense =>{
        console.log('errr');
        fetch("localhost:8080", {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(newExpense)
        })
        .then(res => this.setState({open: true, message: 'Expense added'}))
        .catch(err => console.error(err));
    }
}
render() {
    return (
        <AddExpense saveExpense={this.saveExpense} />
    )
}

export default SaveExpense;