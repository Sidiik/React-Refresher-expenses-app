import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";
function NewExpense({ onEnteredData }) {
  const onSaveExpense = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    onEnteredData(expenseData);
  };

  return (
    <div className="newexpense">
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
}

export default NewExpense;
