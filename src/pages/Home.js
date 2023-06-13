import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function Home() {

    const [users,setUsers] = useState([])

    useEffect(()=>{
        // console.log("code with Rimaz")
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };
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
    // eslint-disable-next-line array-callback-return
    users.map((users,index)=>(
      <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{users.name}</td>
      <td>{users.username}</td>
      <td>{users.email}</td>
      <td>
        <button className='btn btn-primary mx-2 mt-1'>View</button>
        <button className='btn btn-outline-primary mx-2 mt-1'>Edit</button>
        <button className='btn btn-danger mx-2 mt-1'>Delete</button>

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

