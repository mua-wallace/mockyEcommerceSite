import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_URL } from './config/api';
import Header from "./Header";

 function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    });
    async function login() {
        let item ={email, password};
        let result = await fetch(API_URL+"login", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push("/add");
    }
    return (
        <div>
            <Header />;
            <h1>Login Page</h1>
            <div  className="col-sm-6 offset-sm-3">
                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
                <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
                <br />
                <button className="btn btn-primary" onClick={login}>LogIn</button>
            </div>
        </div>
    )
}
export default LogIn;