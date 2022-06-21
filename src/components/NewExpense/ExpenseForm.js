import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = props => {
    const today = new Date().toISOString().split('T')[0];

    const [userInputs, setUserInputs] = useState({
        inputTitle: '',
        inputAmount: '',
        inputDate: today
    });

    const titleChangeHandler = event => setUserInputs(prevState => {
        return {...prevState, inputTitle: event.target.value}
    });
    const amountChangeHandler = event => setUserInputs(prevState => {
        return {...prevState, inputAmount: event.target.value}
    });
    const dateChangeHandler = event => setUserInputs(prevState => {
        return {...prevState, inputDate: event.target.value}
    });

    const submitHandler = event => {
        event.preventDefault();

        const newExpense = {
            title: userInputs.inputTitle,
            amount: parseInt(userInputs.inputAmount),
            date: new Date(userInputs.inputDate)
        };

        props.onNewExpenseSubmit(newExpense)

        setUserInputs(() => {
            return {
                inputTitle: '',
                inputAmount: '',
                inputDate: today
            };
        });
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title"
                       value={userInputs.inputTitle}
                       onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" min="0.01" step="0.01"
                       value={userInputs.inputAmount}
                       onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" min="2019-01-01" max="2024-12-31"
                       value={userInputs.inputDate}
                       onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>;
}

export default ExpenseForm
