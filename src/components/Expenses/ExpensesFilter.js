import './ExpensesFilter.css';

const ExpensesFilter = props => {
    const updateFilterHandler = event => {
        props.onFilterUpdate(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={updateFilterHandler}>
                    {['all', '2022', '2021', '2020', '2019']
                        .map(year => <option key={year} value={year}>{year.toUpperCase()}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
