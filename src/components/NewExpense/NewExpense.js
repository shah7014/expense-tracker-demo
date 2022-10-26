import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enterdExpenseData) => {
    const newExpenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(newExpenseData);
  };

  const showFormHandler = () => {
    setEditing(true);
  };

  const cancelHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      <div className="new-expense__show-form">
        {!editing && <button onClick={showFormHandler}>Add new expense</button>}
      </div>
      {editing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
