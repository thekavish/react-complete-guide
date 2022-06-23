import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import {useState} from "react";

const NewExpense = props => {
    const saveExpenseDataHandler = (newExpense) => {
        props.onAddNewExpense({...newExpense, id: Math.round(Math.random() * 1000)});
        toggleFormView() // Hide form with form submission
    }

    const [formOpen, setFormOpen] = useState(false);

    const toggleFormView = () => {
        setFormOpen(prevState => !prevState)
    }

    let formContent = <div className="new-expense__toggle">
        <button onClick={toggleFormView}>Add New Expense</button>
    </div>;
    if (formOpen) {
        formContent = <ExpenseForm onNewExpenseSubmit={saveExpenseDataHandler} onCancel={toggleFormView}/>;
    }

    return <div className="new-expense">
        {formContent}
    </div>;
}

export default NewExpense
