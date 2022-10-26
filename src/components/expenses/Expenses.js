import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("all");

  const handleFilterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (filterYear === "all") {
      return true;
    }
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = (
    <p className="expenses__empty">No expenses found for selected year</p>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={handleFilterChange}
      />

      {/* {filteredExpenses.length === 0 && (
        <p className="expenses__empty">No expenses found for selected year</p>
      )}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {expenseContent}
    </Card>
  );
}

export default Expenses;
