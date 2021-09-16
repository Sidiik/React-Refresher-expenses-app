import "./ExpenseItem.css";
function ExpenseItem(props) {
  const desc = props.title;
  console.log(props.date);
  return (
    <div className="expense-item">
      <div className="e-date">
        <h2> {props.date} </h2>
      </div>
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
