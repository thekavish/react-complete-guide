import Chart from "../Chart/Chart";
import {collect} from "collect.js";

const ExpensesChart = props => {
    const chartData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => {
        return {label: month, value: 0}
    });

    collect(props.items).each(expense => {
        chartData[expense.date.getMonth()].value += expense.amount;
    })

    return <Chart dataPoints={chartData}/>
};

export default ExpensesChart
