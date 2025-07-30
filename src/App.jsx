import './App.css';
import Todo from './components/Todo';
import CountCard from './components/Count';
import InputText from './components/Input';
import Tab from './components/Tab';
import { useEffect, useState } from 'react';
import TodoCard from './components/TodoCard';

function App() {

  

  const [todoStats, setTodoStats] = useState([
    {
      status: 'active',
      count: 2
    },
    {
      status: 'completed',
      count: 4
    },
  ])

  const [todoList, setTodoList] = useState([
    {
      todo: 'This is first todo',
      date: new Date(),
      status: 'active'
    },
    {
      todo: 'This is sec todo',
      date: new Date(),
      status: 'active'
    },
    {
      todo: 'This is third todo',
      date: new Date(),
      status: 'active'
    },
    {
      todo: 'This is fourth todo',
      date: new Date(),
      status: 'completed'
    },
    {
      todo: 'This is fifth todo',
      date: new Date(),
      status: 'completed'
    },
  ])

  useEffect(()=> {
    console.log(todoList, 'tot')
  }, [])

  const renderCountCard = () => {

    const activeTodoCount = todoList.filter(todo=> todo.status === 'active').length
    const completedTodoCount = todoList.filter(todo=> todo.status === 'completed').length

    return (
      <>
        <CountCard type={'Active'} count={activeTodoCount}/>
        <CountCard type={'Completed'} count={completedTodoCount}/>
      </>
    )

  }

  return (
    <div className="App">
      <Todo />
      <div className='count-wrapper'>
        {/* {
          todoStats.map((item, idx)=> <CountCard type={item.type} count={item.count} key={idx}/>)
        } */}
        {
          renderCountCard()
        }
      </div>
      <div className='input-wrapper'>
        <InputText type={''}/>
      </div>
      <div className='tab-wrapper'>
        <Tab />


        {
          todoList.map((item, idx)=> <TodoCard todoData={item} key={idx}/>)
        }
      </div>
    </div>
  );
}

export default App;


