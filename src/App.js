import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Insurance",
      amount: 300,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e2",
      title: "Study",
      amount: 200,
      date: new Date(2021, 4, 24),
    },
    {
      id: "e3",
      title: "Books",
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e4",
      title: "Bag",
      amount: 400,
      date: new Date(2021, 7, 19),
    },
  ]);

  const saveExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses expenses={expenses} />;
    </div>
  );
}

export default App;
