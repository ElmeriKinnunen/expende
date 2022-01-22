
import React, { Component } from 'react';
import  AddExpense from "./AddExpense"

class App extends Component {
  render(){
  return (
    <div className="App">
      <header>
      </header>
      <main>
        <AddExpense name="Add Expense" />
      </main>
      <footer>
        {/* <p>© Elmeri Kinnunen {new Date().getFullYear()}</p> */}
      </footer>
    </div>
  );
}
}

export default App;
