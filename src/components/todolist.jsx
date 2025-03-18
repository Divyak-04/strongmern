import React,{useEffect, useState} from "react";
import axios from "axios";
function Todolist(){

    const[tasks,settasks]=useState([]);

    const fetchtask=async()=>{
        const res=await axios.get("http://localhost:5000/lists");
        settasks(res.data);
    }

    const handledelete=async(id)=>{
        await axios.delete(`http://localhost:5000/delete/${id}`);
        fetchtask();
    }


    const handlecom=async(id)=>{
        await axios.put(`http://localhost:5000/update/:${id}`);
        fetchtask();
    }

    useEffect(()=>{
        fetchtask();
    },[]);

    return(
        <ul>
            {tasks.map((taskk)=>(
                <li key={taskk._id}>
                    {taskk.text}
                    <button onClick={()=>handledelete(taskk._id)}>delete</button>
                    <button onClick={()=>handlecom(taskk._id)}>complete</button>
                </li>
                
            ))}
            
        </ul>
    );
}
export default Todolist;