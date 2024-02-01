const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());


app.get("/LogIn", cors(), (req, res)=>{

})

app.post("/LogIn", async(req, res)=>{
    const{username, password} = req.body
    
    try{
        const check = await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")

    }
})

app.post("/SignUp", async(req, res)=>{
    const{username, password} = req.body

    const data = {
        username:username,
        password:password
    }
    
    try{
        const check = await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")

    }
})

app.listen(8000, ()=>{
    console.log("portconnected")
})