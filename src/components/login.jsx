import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
     const[users,setusers]=useState("");
     const[pass,setpass]=useState("");
     const[use,setuse]=useState([]);

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(users.trim()==="" || pass.trim()==="")return;
        setuse([...use,{users,pass}]);
        setusers("");
        setpass("");
        
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handlesubmit}>
            <input type="text"
            placeholder="enter the username"
            value={users}
            onChange={(e)=>setusers(e.target.value)}
            required/>

            <input type="password"
            placeholder="enter the password"
            value={pass}
            onChange={(e)=>setpass(e.target.value)}
            required/>

            <button type="submit" onClick={()=>navigate("/first")}>LOGIN</button>

            </form>
            <ul>
                {use.map((us,index)=>(
                    <div key={index}>
                        <p>{us.users}-{us.pass}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default Login;