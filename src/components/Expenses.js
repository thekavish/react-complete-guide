import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const list = props.list;

    return (
        <div>
            <ExpenseItem
                date={list[0].date}
                title={list[0].title}
                amount={list[0].amount}></ExpenseItem>
            <ExpenseItem
                date={list[1].date}
                title={list[1].title}
                amount={list[1].amount}></ExpenseItem>
        </div>
    );
}

export default Expenses
