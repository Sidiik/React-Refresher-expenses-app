import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      title: "car insurance",
      date: new Date(2021, 8, 16),
      price: "232",
    },
    {
      title: "Toilet paper",
      date: new Date(2021, 8, 16),
      price: "78",
    },
    {
      title: "House rent",
      date: new Date(2021, 8, 16),
      price: "132",
    },
  ];

  const onEnteredData = (expense) => {
    const newExpense = expense;
    console.log(newExpense);
  };

  return (
    <div className="App">
      <NewExpense onEnteredData={onEnteredData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
