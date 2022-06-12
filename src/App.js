import ExpenseItem from "./components/ExpenseItem";

const expenses = [
    {
        date: new Date(2022, 4, 8),
        title: "Movie Night",
        amount: 789
    },
    {
        date: new Date(2022, 5, 12),
        title: "Car EMI",
        amount: 4289
    },
]

function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem
                date={expenses[0].date}
                title={expenses[0].title}
                amount={expenses[0].amount}></ExpenseItem>
            <ExpenseItem
                date={expenses[1].date}
                title={expenses[1].title}
                amount={expenses[1].amount}></ExpenseItem>
        </div>
    );
}

export default App;
