import React, { useState } from 'react'
import './NewTodo.css'
function NewTodo(props) {
    const [todo , settodo]=useState({ titel: "", desc: "" })
    const {titel , desc}=todo;
    const handerchange=(event)=>{
        const name =event.target.name;
        settodo((oldtodo)=>{
            return { ...oldtodo, [name]: event.target.value };
        })
    }
    const handelsubmit=(event)=>{
        event.preventDefault();
        props.onehandel(todo);
        settodo({  titel: "", desc: ""  });
    }
  return (
    <div>
        <form onSubmit={handelsubmit} className='form'>
        <div className='form-field'>
            <label>Titel:</label>
            <input type='text' id='titel' name='titel' value={titel} onChange={handerchange}/>
        </div>
        <div className='form-field'>
            <label>Description:</label>
           <textarea type='text' id='desc' name='desc' value={desc} onChange={handerchange}>

           </textarea>
        </div>
        <button type="submit">Add todo</button>
        </form>
 
    </div>
  )
}

export default NewTodo