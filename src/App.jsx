import React, { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import "./styles/App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="app">
      <h1>Personal Finance Tracker</h1>
      <Balance transactions={transactions} />
      <AddTransaction onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
