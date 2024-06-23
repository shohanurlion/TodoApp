import React, { useState } from 'react'
import Todos from './Todos'
import { v4 as uuidv4 } from "uuid";
import "./Homestyle.css"
import NewTodo from './NewTodo'

function Home() {
  const [todos, setTodos] = useState([]);
  const handeleraddtodo=(todo)=>{
    setTodos((prevTodos)=>{
      return [...prevTodos, { id: uuidv4(), todo }];
    })
  };
  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });

  };
  return (
    <div className='container'>
          <h1 style={{ color: "white",textAlign:"center" }}>Todo App</h1>
        <NewTodo onehandel={handeleraddtodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        <button
        className='btn'
        onClick={() => {
          setTodos([]);
        }}
      >
        Clear All todos
      </button>
    </div>
  )
}

export default Home