import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Register(){
const navigate=useNavigate();
    const[users,setusers]=useState("");
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");
    const[user,setuser]=useState([]);

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(users.trim()==="" || email.trim()==="" || pass.trim()==="")return;
        setuser([...user,{users,email,pass}]);
        setusers("");
        setpass("");
        setemail("");
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
            <input type="text"
            placeholder="enter the username"
            value={users}
            onChange={(e)=>setusers(e.target.value)}
            required/>

            <input type="email"
            placeholder="enter the email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            required/>

            <input type="password"
            placeholder="enter the password"
            value={pass}
            onChange={(e)=>setpass(e.target.value)}
            required/>

            <button type="submit" onClick={()=>navigate("/login")}>sign up</button>
            </form>

        {user.map((u,index)=>(
            <div key={index}>
                <p>{u.users}-{u.email}</p>
            </div>
        ))}
        </div>
    );
}
export default Register;