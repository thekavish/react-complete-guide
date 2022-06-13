import Expenses from "./components/Expenses";

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
            <Expenses className="expenses" list={expenses}></Expenses>
        </div>
    );
}

export default App;
