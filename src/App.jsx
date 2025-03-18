import Todolist from "./components/todolist";
import Todoinput from "./components/todoinput";

function App(){
   return(
    <div>
      <h1>welcome to todo App</h1>
      <Todoinput fetchtask={()=>window.location.reload()}/>
      <Todolist/>
    </div>
   );
}
export default App;