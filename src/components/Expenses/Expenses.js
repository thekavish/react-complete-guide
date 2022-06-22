import './Expenses.css'
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const updateExpenseListHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    let filteredList = props.list;
    if (filteredYear !== 'all') {
        filteredList = filteredList.filter((value) => value.date.getFullYear() === parseInt(filteredYear));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterUpdate={updateExpenseListHandler}/>
            <ExpensesList items={filteredList}/>
        </Card>
    );
}

export default Expenses
