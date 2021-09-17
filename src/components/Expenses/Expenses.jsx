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
  return (
    <Card>
      <div className="expenses">
        <div className="filter">
          <ExpenseFilter
            selected={selectedYear}
            onSelectedYear={filterExpenses}
          />
        </div>
        <ExpenseItem title={expenses[0].title} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} date={expenses[2].date} />
      </div>
    </Card>
  );
}
export default Expenses;
