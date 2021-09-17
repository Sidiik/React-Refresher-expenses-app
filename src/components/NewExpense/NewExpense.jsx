import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";
function NewExpense({ onEnteredData }) {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpense = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    onEnteredData(expenseData);
  };
  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="newexpense">
      {!showForm && <button onClick={showFormHandler}>Add new Expense</button>}
      {showForm && (
        <ExpenseForm onSaveExpense={onSaveExpense} setShowForm={setShowForm} />
      )}
    </div>
  );
}

export default NewExpense;
