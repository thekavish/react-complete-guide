import './ChartBar.css';
import './Tooltip.css';

const ChartBar = (props) => {
    let barFillHeight = 0;
    if (props.maxValue > 0) {
        barFillHeight = Math.round(100 * (props.value / props.maxValue));
    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeight + '%'}}></div>
        </div>
        <div className="chart-bar__label tooltip">
            {props.label}
            <span className="tooltip-text">{'Rs. ' + props.value}</span>
        </div>
    </div>
};

export default ChartBar
