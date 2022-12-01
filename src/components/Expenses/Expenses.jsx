import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

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
                    <ExpensesChart expenses={filteredExpenses} />
                    <ExpensesList items={filteredExpenses} />
                </Card>
            </li>
        </div>
    );
};

export default Expenses;
