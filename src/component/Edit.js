import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Data from './data';

export default function Edit() {
    let history = useNavigate();
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[id, setId] = useState('');

    let index = Data.map(function(e){
        return e.id
    }).indexOf(id);


    const handleSubmit = (e) =>{
        e.preventDefault();
        let a = Data[index];
        a.name=name;
        a.age=age;
        history('/')
    }

   useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('ID'))
   }, [])


  return (

    <form>
        <label htmlFor='name'>
            Name
        </label>
        <input id='name' type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required>
        </input>
        <br></br>
        <label htmlFor='age'>
            Age
        </label>
        <input id='age' type='number' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} required>
        </input>

        <input type='submit' onClick={(e) => handleSubmit(e)}>
        </input>
    </form>
  )
}
