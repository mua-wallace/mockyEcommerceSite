import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Register() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

   async function signup(){
        let item = {name, email, password};

      let result = await fetch("http://localhost:8000/api/register", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        // console.warn("reult", result);
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push("/add");

    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name"></input>
             <br />
             <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"></input>
             <br />
             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"></input>
             <br />
            <button onClick={signup} className="btn btn-primary">Sign Up</button>
        </div>
    )
}
export default Register;