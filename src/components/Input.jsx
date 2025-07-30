import './Input.css'

const InputText = () => {
    return(
        <div className='add-task'>
            <input type='text' placeholder='What needs to be done ?'/>
            <button type='submit'>+ Add Task</button>
        </div>
    );
}
export default InputText;



