const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://burago01:sifra1234@cluster0.dc1wqq3.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})


const newSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema);

module.exports=collection