import { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  // const [newExpense, setNewExpense] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // const inputChangeHandler = (event) => {
  //   // setNewExpense({
  //   //   ...newExpense,
  //   //   [event.target.id]: event.target.value,
  //   // });
  //   setNewExpense((prevState) => {
  //     return {
  //       ...prevState,
  //       [event.target.id]: event.target.value,
  //     };
  //   });
  // };

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = { title, amount, date: new Date(date) };
    // console.log(newExpense);

    //passing data up child to parent
    props.onSaveExpenseData(newExpense);
    //resetting state
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.1"
            step="0.1"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
