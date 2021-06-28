import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // Input Handlers
  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={inputTitle}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={inputAmount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="Date"
              min="2020-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={inputDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
