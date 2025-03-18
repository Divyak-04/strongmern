const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/newdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const TaskSchema=new mongoose.Schema({
    text:String,
    completed:Boolean,
});



const Task=mongoose.model("Task",TaskSchema,"lists");

app.post("/add",async(req,res)=>{
    const newTask=new Task({text:req.body.text,completed:false});
    await newTask.save();
    res.json(newTask);
});

app.get("/lists",async(req,res)=>{
    const lists=await Task.find();
    res.json(lists);
});

app.delete("/delete/:id",async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message:"deleted"});
});

app.put("/update/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);

    task.completed = !task.completed; // Toggle
    await task.save();
    res.json(task);
});

app.listen(5000,()=>console.log("server is running"));



