import Card from "./Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react/cjs/react.development";
function Expenses(props) {
  const { expenses } = props;
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterExpenses = (selectedFilter) => {
    console.log("Expenses jsx", selectedFilter);
    setSelectedYear(selectedFilter);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  let expenseContent = <p>No content found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = (
      <div>
        {filteredExpenses.map((expense, idx) => (
          <ExpenseItem
            key={idx}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </div>
    );
  }

  return (
    <Card>
      <div className="expenses">
        <div className="filter">
          <ExpenseFilter
            expenses={expenses}
            selected={selectedYear}
            onSelectedYear={filterExpenses}
          />
        </div>
        {expenseContent}
      </div>
    </Card>
  );
}
export default Expenses;
