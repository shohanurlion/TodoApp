import React from 'react'
import './Todostyle.css'
import { RiDeleteBin5Line } from "react-icons/ri";
function Todo(props) {
    const {titel,desc}=props.todo;
    const { id } = props;
    const handleClick = (id) => {
      props.onRemoveTodo(id); 
    };
  return (
    <article>
        <div className='todo'>
           <div>
           <h3>{titel}</h3>
           <p>{desc}</p>
           </div>
         <button className='btn'  onClick={() => {
            handleClick(id);
          }}>
            <RiDeleteBin5Line />
        </button>
        </div>
      
    </article>
  )
}

export default Todo