import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const INITIAL_EXPENSES = [
    {
      title: "car insurance",
      date: new Date(2021, 8, 16),
      price: "232",
    },
  ];
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const onEnteredData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onEnteredData={onEnteredData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
