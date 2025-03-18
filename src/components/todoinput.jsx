import React,{useState} from "react";
import axios from "axios";

function Todoinput({fetchtask}){

    const[task,settask]=useState("");

    const handleaddtask=async()=>{
        if(task.trim()==="")return;
        await axios.post("http://localhost:5000/add",{text:task});
        settask("");
        fetchtask();

    }
    return(
        <div>
            <input type="text"
            placeholder="enter the task"
            value={task}
            onChange={(e)=>settask(e.target.value)}
            />
            <button onClick={handleaddtask}>add task</button>
        </div>
    );
}
export default Todoinput;