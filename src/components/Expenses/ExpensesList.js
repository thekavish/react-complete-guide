import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    if (props.items.isEmpty()) {
        return <h2 className="expenses-list__fallback">No Expenses here!</h2>
    }

    return <ul className="expenses-list">
        {props.items.map(ex => <ExpenseItem
            key={ex.id}
            date={ex.date}
            title={ex.title}
            amount={ex.amount}
        />)}
    </ul>;
}

export default ExpensesList;
