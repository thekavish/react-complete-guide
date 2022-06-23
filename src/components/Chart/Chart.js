import ChartBar from "./ChartBar";
import './Chart.css';
import {collect} from "collect.js";

const Chart = props => {
    const maxValue = collect(props.dataPoints).max('value');

    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
        />)}
    </div>
};

export default Chart
