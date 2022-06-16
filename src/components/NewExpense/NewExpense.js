import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = props => {
    const saveExpenseDataHandler = (newExpense) => {
        props.onAddNewExpense({...newExpense, id: Math.round(Math.random() * 1000)});
    }

    return <div className="new-expense">
        <ExpenseForm onNewExpenseSubmit={saveExpenseDataHandler}/>
    </div>;
}

export default NewExpense
