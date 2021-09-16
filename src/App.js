import ExpenseItem from "./components/ExpenseItem";
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
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date.toDateString()}
      />
    </div>
  );
}

export default App;
