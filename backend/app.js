const express=require("express");
const app=express();
require("./conn.js");
const cors = require('cors');
const user=require('./model/user.js')
app.use(cors());
const port=8000;
app.use(express.json());

app.get("/",async (req,res)=>{
    res.send("hello")
})

// create=post
//read=get
//update=put or patch
//delete

//to add a user
app.post("/user",async(req,res)=>{
    try{
        //const addUser=new user(req.body);
        console.log(req.body);
        const data={
            email:req.body.email,
            name:req.body.username,
            password:req.body.email,
            projects:[] //other stuff while adding project
        }
        const addUser=new user(data);
        console.log(data);
        const insertUser=await addUser.save();
        res.status(201).json({status:"okay"});
        console.log("added!")
    }catch(e){res.status(400).send(e)}
})

//to auth a user
app.post("/auth",async(req,res)=>{
    try{
        console.log(req.body);
        // console.log(req.body.username)
        const getUser=await user.find({name:req.body.username});
        console.log(getUser[0].password)
        if(getUser[0].password==req.body.password){
        res.status(201).json({status:"okay"});
        }
        else{
        res.status(201).json({status:"nope"}); //pswd not matched
        }
        
    }catch(e){res.status(400).send(e)} //user not found
})

app.get("/user",async(req,res)=>{
    try{
        const getUser=await user.find({});
        res.json(getUser);
        console.log(getUser)
    }catch(e){res.status(400).send(e)}
})

app.get("/user/:id",async(req,res)=>{
    try{
        // const id=parseInt(req.params.id);
        const id=String(req.params.id);
        console.log(id);
        const getUser1=await user.find({name:id});
        console.log(getUser1);
        res.json(getUser1);
    }catch(e){res.status(400).send(e)}
}) //get all user data

// adding a project
// deets in url then pass
app.post("/user",async(req,res)=>{
    try{
        const addUser=new user(req.body);
        
        console.log(req.body);
        const insertUser=await addUser.save();
        res.status(201).json(insertUser);
        console.log("added!")
    }catch(e){res.status(400).send(e)}
})

// app.delete("/user/:id",async(req,res)=>{
//     try{
//         const id=parseInt(req.params.id);
//         const putuser1=await user.findOneAndDelete({userid:id});
//         res.send(putuser1);
//     }catch(e){
//         console.log(e);
//         res.status(500).send(e)
//     }
// })

app.listen(port,()=>{
    console.log(`connection successful at port ${port}`);
})