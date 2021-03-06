import React, { Component } from 'react';
import './App.css';
import Bank from './Bank/Bank'
import { connect } from 'react-redux';

class App extends Component {

render() { 

  let transactionHistory = (
   <div>
    {this.props.transactionHistory.map((log) => { return <li>{log.transactionType} ${log.amount} | closing balance: ${log.newBalance} | {log.date} </li> })} 
   </div>
  )

    return (
      <div className="App">

      <header className="App-header">
        <h1>Mafia Bank</h1>
          <h2>We launder your money properly</h2>
      </header>

      <h1>Balance: {this.props.balance}</h1>

      <div className="atm">    
        <h2>ATM Machine</h2>
        <button className="mainbtn" onClick={() => this.props.withdraw(50)}>Withdraw $50</button>
        <button className="mainbtn" onClick={() => this.props.withdraw(100)}>Withdraw $100</button>
      </div>

      <Bank />

      <div>
        <h2>Transaction History</h2>
        {transactionHistory}
      </div>
 
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    balance: state.balance,
    transactionHistory: state.transactionHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //in last app values were hard coded, now we pass a payload depending on which button is clicked
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

