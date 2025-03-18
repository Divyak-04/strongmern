import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    return(

        <div>
            <h1>Welcome to Todo App</h1>
            
            <h1>GET STARTED!</h1>

            <p>already an user ? <button onClick={()=>navigate("/login")} >LOGIN</button></p><br/>
      
      <p>new user ? create account SIGNUP <button onClick={()=>navigate("/register")}>REGISTER</button></p>
        </div>
    );
}
export default Home;