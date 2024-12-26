import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((item) => (
          <li key={item.id} className={item.type}>
            {item.description} - ${item.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
