import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import CountCard from './components/Count';
import InputText from './components/Input';
import Tab from './components/Tab';
import { useState } from 'react';

function App() {


  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todo />
      <div className='count-wrapper'>
        <CountCard type={'active'} count={2}/>
        <CountCard type={'completed'} count={4}/>
      </div>
      <div className='input-wrapper'>
        <InputText type={''}/>
      </div>
      <div className='tab-wrapper'>
        <Tab />
      </div>
    </div>
  );
}

export default App;
