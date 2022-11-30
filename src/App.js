import React, { useState } from "react";

import { NewExpense } from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummyExpenses = [
    {
        id: "e1",
        title: "Groceries",
        amount: 100.35,
        date: new Date(2022, 7, 3)
    },

    {
        id: "e2",
        title: "Rent",
        amount: 500,
        date: new Date(2022, 6, 3)
    },

    {
        id: "e3",
        title: "New Laptop",
        amount: 650,
        date: new Date(2022, 10, 1)
    },

    {
        id: "e4",
        title: "Loans",
        amount: 1500,
        date: new Date(2023, 3, 5)
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(dummyExpenses);

    // This function is triggered whenever a new expense is added in the UI

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    //This is an alternative to the code below, You can make use of this
    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h2", {}, "Let's Get this Budget Fixed!"),
    //     React.createElement(Expenses, { items: expenses })
    // );
    //OR THIS Below.

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
