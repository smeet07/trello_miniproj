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
            name:req.body.name,
            password:req.body.password,
            projects:[] //other stuff while adding project
        }
        const addUser=new user(data);
        console.log(data);
        const insertUser=await addUser.save();
        res.status(201).json({status:"okay"});
        console.log("added!")
    }catch(e){res.status(400).send(e)}
})
//to add a user
app.post("/addproject",async(req,res)=>{
    try{
        //const addUser=new user(req.body);
        console.log(req.body);
        const data={
            email:req.body.email,
            name:req.body.name,
            password:req.body.password,
            projects:[] //other stuff while adding project
        }
        const addUser=new user(data);
        console.log(data);
        const insertUser=await addUser.save();
        res.status(201).json({status:"okay"});
        console.log("added!")
    }catch(e){res.status(400).send(e)}
})
//TEMP FN TO BE DELETED
app.post("/users",async(req,res)=>{
    try{
        //const addUser=new user(req.body);
        console.log(req.body);
        const addUser=new user(req.body);
        console.log(req.body);
        const insertUser=await addUser.save();
        res.status(201).json({status:"okay"});
        console.log("added!")
    }catch(e){res.status(400).send(e)}
})

app.post("/projauth",async(req,res)=>{
    try{
        console.log(req.body);
        // console.log(req.body.username)
        const getUser=await user.find({"projects.id":req.body.password})
        var flag=0
        getUser.forEach(function (arrayItem) {
            var x = arrayItem.name;
            if (x==req.body.name){
                flag=1

            }
            console.log(x);
        });
        if(flag==1){
            console.log("already a member")
            res.json({status:"nope"})
        }
        else{
        console.log("can add");
        const getProj=await user.find({name:"ishita"}, {projects:{$elemMatch: {id:req.body.password}}}); 
        console.log("---------------------")
        console.log(getProj[0].projects[0])
        
        const inserP=await user.updateOne({name:req.body.name},{ $push: { projects: getProj[0].projects[0] } })
        res.json({status:"okay"})
        }
    }catch(e){res.status(400).send(e)} //user not found
})

//to auth a user
app.post("/auth",async(req,res)=>{
    try{
        console.log(req.body);
        // console.log(req.body.username)
        const getUser=await user.find({name:req.body.name});
        console.log(getUser[0].password)
        if(getUser[0].password==req.body.password){
        res.status(201).json(getUser[0]);
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
        console.log(getUser1[0]);
        res.json(getUser1[0]);
    }catch(e){res.status(400).send(e)}
}) //get all user data

// adding a project SINGLE PROJECT
// deets in url then pass
app.post("/addproj",async(req,res)=>{
    try{
        console.log(req.body);
        const x={
            id:Math.floor(Math.random() * 100000),
            title:req.body.title,
            bg:'',
            teams:[],
            lists:[],
        }
        console.log(x);
        const inserP=await user.updateOne({name:req.body.id},{ $push: { projects: x } });
        res.status(201).json({status:okay});
        console.log("added!")
    }catch(e){res.status(400).send(e)}
})

//get a single project
app.get("/getproj/:userid/:projid",async(req,res)=>{
    try{
        // const id=parseInt(req.params.id); {name:"smeet"}, {projects:{$elemMatch: {id:"project-1"}}}
        console.log(req.params);
        const getProj=await user.find({name:req.params.userid}, {projects:{$elemMatch: {id:req.params.projid}}}); //gives back list
        console.log(getProj[0].projects[0]);
        res.json(getProj[0].projects[0]);
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