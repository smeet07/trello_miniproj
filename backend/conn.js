var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/minip').then(()=>{
    console.log("db connection successful!");
}).catch((e)=>{
    console.log(e)
})