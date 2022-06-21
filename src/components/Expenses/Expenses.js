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
            {list.map(ex => <ExpenseItem key={ex.id} date={ex.date} title={ex.title} amount={ex.amount}/>)}
        </Card>
    );
}

export default Expenses
