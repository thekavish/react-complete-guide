import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    const list = props.list;

    return (
        <Card className="expenses">
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
