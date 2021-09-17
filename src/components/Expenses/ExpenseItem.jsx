import Card from "./Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";
function ExpenseItem(props) {
  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="e-description">
          <h2> {props.title} </h2>
        </div>
        <div className="e-price">
          <h2>${props.price}</h2>
        </div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
