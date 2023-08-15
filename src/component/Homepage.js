import React, { Fragment } from 'react'
import Data from './data'
import {Link,useNavigate} from 'react-router-dom';
export default function Homepage() {
    let history = useNavigate();
    const handleDelete = (id) =>{
        let index = Data.map(function(e){
            return e.id
        }).indexOf(id);
        Data.splice(index,1)
        history('/')
    }
    const handleEdit =(id, name, age) =>{
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age)
        localStorage.setItem('ID', id);
    }
  return (
   <Fragment>
    <table>
        <caption>Basic CRUD operation</caption>
        <thead>
            <tr>
                <th> ID</th>
                <th>Name</th>
                <th>age</th>
                <th>operation</th>
            </tr>
        </thead>
        <tbody>
            {
                Data && Data.length >0
                ?
                Data.map((item)=>{
                    return(
                        <tr>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.age}
                            </td>
                            <td>
                                <Link to={`/edit`}>
                                    <button onClick={()=>handleEdit(item.id, item.name, item.age)} >
                                        Update
                                    </button>
                                </Link>
                                /
                                <button onClick={()=> handleDelete(item.id)}>
                                    delete
                                </button>
                            </td>
                        </tr>
                    )
                })
                : "No Data found"
            }
            <tr>

            </tr>
        </tbody>

    </table>
    <br>
    </br>

    <Link to={'/create'}>
        <button>
            CREATE
        </button>
    </Link>
   </Fragment>
  )
}
