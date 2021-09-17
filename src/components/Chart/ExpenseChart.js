import React from "react";
import Chart from "./Chart";

function ExpenseChart(props) {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "March", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const monthExpense = expense.date.getMonth();
    chartDataPoints[monthExpense].value += expense.price;
  }

  return (
    <div className="expensechart">
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
}

export default ExpenseChart;
