import React, { useState } from "react";

function AddTransaction({ onAddTransaction }) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const transaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      description,
    };

    onAddTransaction(transaction);
    setAmount("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-transaction">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
