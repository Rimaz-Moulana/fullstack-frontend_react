import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser(){
    let navigate=useNavigate()

    const {id} = useParams()

    const [user,setUser] = useState({
        name:" ",
        username:" ",
        email:" "
    })

    const{name,username,email} = user;

    const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
   }

    useEffect(()=>{
        loadUser();
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const onSubmit=async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/");
   }

    const loadUser = async ()=>{
    const result=await axios.get(`http://localhost:8080/users/${{id}}`);
        setUser(result.data);
}
    return(
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3 rounded shadow border p-4 mt-2">
                <h2 className="text-center md-4">Edit User</h2>
                
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
               
                <label htmlFor="Name" className="form-label">Name</label>
                    <input
                        className={"form-control"}
                        placeholder={"Enter your name"}
                        type={"text"}
                        name={"name"}
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        
                    />
                    <label htmlFor="Name" className="form-label mt-3">User Name</label>
                    <input
                        className={"form-control"}
                        placeholder={"Enter your user name"}
                        type={"text"}
                        name={"username"}
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                        
                    />
                    <label htmlFor="Name" className="form-label mt-3">Email</label>
                    <input
                        className={"form-control"}
                        placeholder={"Enter your email"}
                        type={"text"}
                        name={"email"}
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to={"/"}>Cancel</Link>
                </form>
                </div>
                
            </div>
        </div>
    )
}