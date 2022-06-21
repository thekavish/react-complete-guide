import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const updateExpenseListHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    let list = props.list;
    if (filteredYear !== 'all') {
        list = props.list.filter((value) => value.date.getFullYear() === parseInt(filteredYear));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterUpdate={updateExpenseListHandler}/>
            <ExpenseItem
                date={list[0].date}
                title={list[0].title}
                amount={list[0].amount}></ExpenseItem>
            <ExpenseItem
                date={list[1].date}
                title={list[1].title}
                amount={list[1].amount}></ExpenseItem>
            <ExpenseItem
                date={list[2].date}
                title={list[2].title}
                amount={list[2].amount}></ExpenseItem>
            <ExpenseItem
                date={list[3].date}
                title={list[3].title}
                amount={list[3].amount}></ExpenseItem>
        </Card>
    );
}

export default Expenses
