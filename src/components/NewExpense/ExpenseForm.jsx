import React from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  return (
    <div className="expenseForm">
      <h1>Add new form</h1>
      <div className="form-controls">
        <div className="control">
          <h3>Title</h3>
          <input type="type" />
        </div>
        <div className="control">
          <h3>Price</h3>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="control">
          <h3>Date</h3>
          <input type="Date" />
        </div>
        <div className="button">
          <button>Add Expense</button>
          <p className="cancel"> Cancel</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseForm;
