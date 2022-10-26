import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const newExpenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
