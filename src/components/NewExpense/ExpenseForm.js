import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //  APPROACH 1
  // Handling all the states and state variables separately. The updation is done instantly and doesn't depends on the previous state.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  //APPROACH 2
  /* 
  In this approach we depend on prev states. But React doesn't instantly executes the state but schedules them.
  So It may happen that during the updation process we may refer to a state that was not the most latest one.
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(event) {
    setUserInput({ ...userInput, enteredTitle: event.target.value });
  }

  function amountChangeHandler(event) {
    setUserInput({ ...userInput, enteredAmount: event.target.value });
  }

  function dateChangeHandler(event) {
    setUserInput({ ...userInput, enteredDate: event.target.value });
  } 
  */

  //APPROACH 3 :
  /* 
  This solves the issue in previous approach. It makes sure that every time we take reference from the previous state its the latest one
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  }

  function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  }

  function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  } */

  function submitHandler(event) {
    // to prevent the reload of the page on submission
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // send data to the parent component
    props.onSaveExpenseData(expenseData);

    // to clear the form : this is done by 2 way binding i.e. using the state variable to set the calue of the fields
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
