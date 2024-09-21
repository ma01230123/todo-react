import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const Todo = () => {
  const [todoText,setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  // const onClickDelete = (event) => event.target.closest("li").remove();
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    newCompleteTodos.splice(index,1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className='input-area'>
        <input type="text" placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}/>
        <button onClick = {onClickAdd}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo,index) => (
              <li key={todo}>
              <div className='list-row'>
                 <p className='todo-item'>{todo}</p>
                 <button onClick = {() => onClickComplete(index)}>完了</button>
                 <button onClick = {() => onClickDelete(index)}>削除</button>
               </div>
             </li>
            )
            )}
        </ul>
      </div>
      <div className='complete-area'>
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo,index) => (
              <li key={todo}>
              <div className='list-row'>
                 <p className='todo-item'>{todo}</p>
               <button onClick = {() => onClickBack(index)}>戻す</button>
               </div>
             </li>
            )
            )}
        </ul>
      </div>
        
    </>
  )
}

// export default App
