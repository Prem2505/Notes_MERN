const express=require("express");
const notes = require("./notes");
const dotenv=require("dotenv");


const app=express();
dotenv.config();
const PORT= process.env.PORT || 6000;

app.get("/",(req,res)=>{
    res.send("API is Running---");
});

app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

app.get("/api/notes/:id",(req,res)=>{
    const note= notes.find((n)=>n._id===req.params.id);
    res.json(note);
});

app.listen(PORT,console.log(`Server is satrted at ${PORT} poart`));
