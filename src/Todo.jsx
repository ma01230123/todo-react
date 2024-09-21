import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputTodo } from './components/InpuTodo'
import { IncompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos'

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

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;
  return (
    <>
    <InputTodo 
      todoText={todoText} 
      onChangeTodoText={onChangeTodoText} 
      onClickAdd={onClickAdd}
      disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p>登録できるTODOは５個までです。</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      />
        
    </>
  )
}

// export default App
