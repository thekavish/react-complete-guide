import Expenses from "./components/Expenses/Expenses";

const expenses = [
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
        date: new Date(2022, 5, 12),
        title: "Car EMI",
        amount: 4289
    },
    {
        id: 'e4',
        date: new Date(2022, 5, 26),
        title: "Shiva Trilogy - The Secrets of Meluha",
        amount: 279
    },
]

const App = () => {
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses className="expenses" list={expenses}></Expenses>
        </div>
    );
}

export default App;
