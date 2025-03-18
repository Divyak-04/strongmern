import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Todolist from "./components/todolist";
import Todoinput from "./components/todoinput";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";

function App(){
  const navigate=useNavigate();
   return(
   
      <div>
        
        
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/first" element={<Todoinput fetchtask={() => window.location.reload()} />} />
          <Route path="/tasks" element={<Todolist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>}  />
          
        </Routes>
      </div>
    
   );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
export default WrappedApp;