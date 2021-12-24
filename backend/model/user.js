const express=require("express");
const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    
        email:String,
        name:String,
        password:String,
        projects:[
            {
                id:String,
                title:String,
                bg:String,
                teams:[],
                lists:{
                    id:String,
                    title:String,
                    cards:[
                        {
                            id:String,
                            title:String,
                        }
                    ]
                }
            }
        ]
    }
)

//maing new collection
const users=new mongoose.model('users',userSchema)

module.exports=users