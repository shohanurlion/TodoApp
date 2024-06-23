import React, { useState } from 'react'
const booksData= [
        {
            id:1,
            name:"liton Rahman shohanur"
        },
        {
            id:2,
            name:"Noyon Rahman"
        },
        {
            id:3,
            name:"Motiur Rahman "
        },
];

function Usereducer() {
    const [nemes , setnames]=useState(booksData);
    const [values , setvalues]=useState("");
    const hendelersubmit =(e)=>{
        e.preventDefault();
        setvalues(" ")
       setnames((prevState)=>{
        const newName ={id : new Date().getTime().toString(),name:values }
        return [...prevState , newName]
       
       })
    }
  return (
    <div>
        <h1>Name list</h1>
        <form onSubmit={hendelersubmit}>
            <input type='text' value={values} onChange={(e)=>{
                setvalues(e.target.value);
            }} />
            <input type='submit' value="Add name"/>
        </form>
        {nemes.map((all)=>{
            const {id, name}=all;
            return <li key={id}>
                {name}
            </li>
        })}
        
    </div>
  )
}

export default Usereducer