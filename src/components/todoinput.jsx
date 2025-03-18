import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Todoinput({ fetchtask }) {
    const navigate=useNavigate();
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);

  

  const handleaddtask = async () => {
    if (task.trim() === "") return;
    settasks([...tasks, task]);
    await axios.post("http://localhost:5000/add", { text: task });
    settask("");
    fetchtask();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the task"
        value={task}
        onChange={(e) => settask(e.target.value)}
      />
      {/* ✅ Fixed onClick */}
      <button onClick={handleaddtask}>Add Task</button>
      <button onClick={()=>navigate("/tasks")}>VIEW TASKS</button>

      <ul>
        {tasks.map((tas, index) => (
          <li key={index}>{tas}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todoinput;
