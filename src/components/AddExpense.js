import React, { Component } from 'react';

class AddExpense extends Component{
    state = {
        open: false, 
        target: '',
        category: '',
        receiver: '',
        description: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }
    
    saveExpense = () => {
        const newExpense = {
            target: this.state.target,
            category: this.state.category,
            receiver: this.state.receiver,
            description: this.state.description,
        }
        console.log(newExpense);
    }

    render() {
        return (
            <section className='payment-form'>
            <div className='wrap'>
                <div className='banner'>
                    <h1>{this.props.name}</h1>
                </div>
            <form>
                <label>
                Target:
                <select>
                    <option value={this.state.target} onChange={this.handleChange}>-Select-</option>
                    <option value={this.state.target} onChange={this.handleChange}>Shopping</option>
                    <option value={this.state.target} onChange={this.handleChange}>Grocery</option>
                    <option value={this.state.target} onChange={this.handleChange}>Car</option>
                    <option value={this.state.target} onChange={this.handleChange}>Transport</option>
                    <option value={this.state.target} onChange={this.handleChange}>Lunch</option>
                    <option value={this.state.target} onChange={this.handleChange}>Living</option>
                    <option value={this.state.target} onChange={this.handleChange}>Other</option>
                </select>
                </label>

                <label>
                Category:
                <select>
                    <option value={this.state.category} onChange={this.handleChange}>-Select-</option>
                    <option value={this.state.category} onChange={this.handleChange}>Mandatory</option>
                    <option value={this.state.category} onChange={this.handleChange}>Nonmandatory</option>
                </select>
                </label>

                <label>
                Receiver:
                <input type='text' name='receiver' value={this.state.receiver} onChange={this.handleChange}/>
                </label>


                <label>
                Description:
                <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/>
                </label>
                <input onClick={this.saveExpense} className='submit' type='submit' value='Add payment' />
            </form>
            </div>
            </section>
        )
    }
}

export default AddExpense;
