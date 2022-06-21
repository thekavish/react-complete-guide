import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";
import {collect} from "collect.js";

const dummyExpenses = [
    {
        id: 'e1',
        date: new Date(2022, 3, 27),
        title: "NinetyOne Bicycles - MADRID",
        amount: 23990
    },
    {
        id: 'e2',
        date: new Date(2022, 4, 8),
        title: "Movie Night",
        amount: 890
    },
    {
        id: 'e3',
        date: new Date(2021, 5, 12),
        title: "Car EMI",
        amount: 4289
    },
    {
        id: 'e4',
        date: new Date(2022, 5, 26),
        title: "Shiva Trilogy - The Secrets of Meluha",
        amount: 279
    },
    {
        id: 'e5',
        date: new Date(2021, 10, 14),
        title: "LPG - Refill",
        amount: 1060
    },
]

const App = () => {
    const [expenses, setExpenses] = useState(dummyExpenses)

    const addToExpensesHandler = expense => {
        setExpenses(prevState => {
            return [expense, ...prevState]
        })
    }

    return (
        <div>
            <NewExpense onAddNewExpense={addToExpensesHandler}/>
            <Expenses className="expenses" list={collect(expenses).sortByDesc('date')}/>
        </div>
    );
}

export default App;
