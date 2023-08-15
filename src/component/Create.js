import React, {useState} from 'react'
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom';
import Data from './data';
export default function Create() {
    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a= name, b = age ;
        Data.push({id:uniqueId, name:a, age :b})
        history("/")
    }

  return (
        <form>
            <label htmlFor='name'>
                Name
            </label>
            <input id='name' type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required>
            </input>
            <br></br>
            <label htmlFor='age'>
                Age
            </label>
            <input id='age' type='number' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} required>
            </input>

            <input type='submit' onClick={(e) => handleSubmit(e)}>
            </input>
        </form>
  )
}
