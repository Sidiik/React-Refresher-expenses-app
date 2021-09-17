import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm({ onSaveExpense, setShowForm }) {
  const [userInput, setUserInput] = useState({
    title: "",
    price: 0,
    date: "",
  });
  // function output() {
  //   console.log(
  //     userInput.title.charAt(0).toUpperCase() + userInput.title.slice(1),
  //     userInput.price,
  //     userInput.date
  //   );
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title.charAt(0).toUpperCase() + userInput.title.slice(1),
      price: userInput.price,
      date: new Date(userInput.date),
    };
    onSaveExpense(expenseData);
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  };
  const showFormHandler = () => {
    setShowForm(false);
  };

  return (
    <form className="expenseForm" onSubmit={submitHandler}>
      <h1>Add new form</h1>
      <div className="form-controls">
        <div className="control">
          <h3>Title</h3>
          <input
            type="type"
            value={userInput.title}
            onChange={(e) =>
              setUserInput((prevState) => {
                return { ...prevState, title: e.target.value };
              })
            }
          />
        </div>
        <div className="control">
          <h3>Price</h3>
          <input
            type="number"
            value={userInput.price}
            min="0.01"
            step="0.01"
            onChange={(e) =>
              setUserInput({ ...userInput, price: e.target.value })
            }
          />
        </div>
        <div className="control">
          <h3>Date</h3>
          <input
            type="Date"
            value={userInput.date}
            onChange={(e) =>
              setUserInput({ ...userInput, date: e.target.value })
            }
          />
        </div>
        <div className="button">
          <button>Add </button>
          <p className="cancel" onClick={showFormHandler}>
            {" "}
            Cancel
          </p>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
