import Card from "./Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";
function ExpenseItem(props) {
  const [desc, setDesc] = useState(props.title);

  function changeHandler() {
    setDesc("Updated!!");
  }
  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="e-description">
          <h2> {desc} </h2>
        </div>
        <div className="e-price">
          <h2> $297.67</h2>
        </div>
        <button onClick={changeHandler}>Change title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
