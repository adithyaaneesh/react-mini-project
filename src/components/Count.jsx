import './Count.css'

const CountCard = (props)=> {

    const { type, count } = props

    return (
        <div className='count-card'>
            <h3>{count}</h3>
            <p>{type}</p>
        </div>
    )
}

export default CountCard