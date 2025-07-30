import { getDate } from "../util/dates"
import './TodoCard.css';


const TodoCard = (props) => {

    const { todoData } = props

    return (
        <div className="todo-card container">
            <p>{todoData.todo}</p>
            <p>{getDate(todoData.date)}</p>
            <p>{todoData.status}</p>
        </div>
    )

}

export default TodoCard