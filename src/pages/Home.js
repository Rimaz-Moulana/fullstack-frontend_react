import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Home() {

    const [users,setUsers] = useState([])

    const {id}=useParams();
    
    useEffect(()=>{
        // console.log("code with Rimaz")
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }
    return(
    <div className='container'>
        <div className='py-5'>
        <table class="table border shadow table-hover">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    users.map((users,index)=>(
      <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{users.name}</td>
      <td>{users.username}</td>
      <td>{users.email}</td>
      <td>
        <Link className='btn btn-primary mx-2 mt-1' to={`userdetails/${users.id}`} >View</Link>
        <Link className='btn btn-outline-primary mx-2 mt-1' to={`/edituser/${users.id}`}>Edit</Link>
        <Link className='btn btn-danger mx-2 mt-1' onClick={()=>deleteUser(users.id)}>Delete</Link>

      </td>
    </tr>
    ))
  }

    
  </tbody>
</table>
        </div>
    </div>
  );
}

