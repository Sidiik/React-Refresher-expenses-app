import React, { useState } from "react";
import "./filter.css";

export default function ExpenseFilter(props) {
  const [filter, setFilter] = useState("2020");

  const filterExpenses = (e) => {
    props.onSelectedYear(e.target.value, "filter");
  };
  return (
    <div className="filter">
      <div className="title">
        <h2>Filter</h2>
      </div>
      <div className="contorl">
        <select
          value={props.selected}
          onChange={filterExpenses}
          selected={filter}
        >
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}
