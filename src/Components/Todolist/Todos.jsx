import React from 'react'
import Todo from './Todo'

function Todos(props) {
  
  return (
    <section >
        {
            props.todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>)
        }
    </section>
  )
}

export default Todos