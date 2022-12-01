import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [editing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditHandler = () => {
        setIsEditing(true);
    };

    const stopEditHandler = (event) => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!editing && (
                <button onClick={startEditHandler}>Add New Expense</button>
            )}
            {editing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditHandler}
                />
            )}
        </div>
    );
};

export { NewExpense };
