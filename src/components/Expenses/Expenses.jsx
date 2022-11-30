import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2019");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expenses) => {
        return expenses.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <li>
                <Card className="expenses">
                    <ExpenseFilter
                        default={filteredYear}
                        onChangeFilter={filterChangeHandler}
                    />
                    <ExpensesList items={filteredExpenses} />
                </Card>
            </li>
        </div>
    );
};

export default Expenses;
