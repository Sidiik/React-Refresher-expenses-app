import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const desc = props.title;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="e-description">
        <h2> {desc} </h2>
      </div>
      <div className="e-price">
        <h2> $297.67</h2>
      </div>
    </div>
  );
}
export default ExpenseItem;
