const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://burago01:sifra1234@cluster0.dc1wqq3.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})

//clanak u novinama
const clanakSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: false
    },
    text:{
        type: String,
        required: false
    },
    file:{
        type: String,
        required: false
    }
});

//export clanka
const clanak = mongoose.model("Clanak", clanakSchema);
module.exports = clanak;