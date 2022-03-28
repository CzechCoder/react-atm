import { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ImArrowUp, ImArrowDown } from "react-icons/im";

class App extends Component {

render() { 

  let transactionHistory = (
   <div>
    {this.props.transactionHistory.map((log) => { return <li>{log.transactionType} ${log.amount} | balance: ${log.newBalance} | {log.date} </li> })} 
   </div>
  )

    return (
      <div className='narrows'>       
          {/* the card - everything above the insert card part */}
        <div className="card">
          <h1>Mafia bank</h1>
          <h2>Laundering your money properly</h2>
          <div className="balance">
          <p>Current balance</p>
          <h4>{this.props.balance}</h4>
          <p>Quick withdrawal</p>
          </div>
          <div className="controls">
          <ul>
            <li><button className="mainbtn" onClick={() => this.props.withdraw(50)}>$50</button></li>
            <li><button className="mainbtn" onClick={() => this.props.withdraw(100)}>$100</button></li>
            <li><button className="mainbtn" onClick={() => this.props.withdraw(500)}>$500</button></li>
            <li><button className="mainbtn" onClick={() => this.props.withdraw(1000)}>$1000</button></li>
          </ul>

          <label>
          <input
            type="number"
            className="textfield"
            onChange={(e) => this.setState({ number: e.target.value })}
          />
        </label>
        <div className="buttons">
          <button
            className="lrgbtn deposit"
            onClick={(amount) =>
              this.props.deposit(parseInt(this.state.number, 10))
            }
          >
            <ImArrowDown/> Deposit
          </button>
          <button
            className="lrgbtn withdraw"
            onClick={(amount) =>
              this.props.withdraw(parseInt(this.state.number, 10))
            }
          >
            <ImArrowUp/> Withdraw
          </button>
        </div>
          
          </div>
        </div>
        <div className="credit-card">
          <div className="card-body">
            1234 4567 1234 4567
          </div>
        </div>

        <div>
        <h2>Transaction History</h2>
        {transactionHistory}
      </div>

      {transactionHistory.props.children.length === 0 && (<div>
        No transactions yet.
      </div>) }

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
    // passing a payload depending on which button is clicked
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
    deposit: (amount) => dispatch({ type: "deposit", value: amount }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

