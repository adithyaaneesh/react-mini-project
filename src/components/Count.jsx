import './Count.css'

const CountCard = (props)=> {


    return (
        <div className='count-card'>
            <h3>{props.count}</h3>
            <p>{props.type === 'active' ? 'Active tasks' : 'completed'}</p>
        </div>
    )
}

export default CountCard