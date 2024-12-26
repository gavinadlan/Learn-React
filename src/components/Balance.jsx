import React from "react";

function Balance({ transactions }) {
  const balance = transactions.reduce(
    (total, item) => total + (item.type === "income" ? item.amount : -item.amount),
    0
  );

  return (
    <div className="balance">
      <h2>Total Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
}

export default Balance;
