const express = require('express');
const app = express() ;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(token === "admin123"){
        return res.status(200).send({message : "Welcome to private route"});
    }
    if(!token){
        return res.status(403).send({message : "403 Access Denied"});
    }
    next();
};

app.get('/public' , (req , res) =>{
    res.json({msg : "welcome to the profile"});
})

app.get('/private' , authMiddleware , (req , res) =>{
    res.json({msg : "welcome to protected route"})
})

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server runnning on port 8000");
})