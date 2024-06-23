import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Json() {
    const [user , setuser]=useState([]);
    const getdata=async()=>{
        const response= await axios.get("http://localhost:3000/user");
        setuser(response.data);
        }
        
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div>
        {user.map(users =>{
            const{name , phon}=users
            return <article key={users.id}>
                <h1>{name}</h1>
                <p>{phon}</p>
            </article>
        })}
    </div>
  )
}

export default Json