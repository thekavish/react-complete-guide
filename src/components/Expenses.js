import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
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
        </Card>
    );
}

export default Expenses
