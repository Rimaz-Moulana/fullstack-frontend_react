import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email} = user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    }
    
  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register User</h2>
                
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor="Name" className='form-label'>Name</label>
                    <input 
                    type={'text'}
                    className={'form-control'}
                    placeholder={'Enter your name'}
                    name='name' 
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />

                    <label htmlFor="UserName" className='form-label mt-3'>User Name</label>
                    <input 
                    type={'text'}
                    className={'form-control'}
                    placeholder={'Enter your user name'}
                    name='username' 
                    value={username}
                    onChange={(e)=>onInputChange(e)}
                    />

                    <label htmlFor="Email" className='form-label mt-3'>Email</label>
                    <input 
                    type={'text'}
                    className={'form-control'}
                    placeholder={'Enter your email'}
                    name='email' 
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <button className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>

                </form>
            </div>
        </div>
    </div>
  )
}
