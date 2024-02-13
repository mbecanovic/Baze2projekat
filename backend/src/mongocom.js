const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://burago01:sifra1234@cluster0.dc1wqq3.mongodb.net/")
.then(()=>{
    console.log("mongodb2 connected");
})
.catch(()=>{
    console.log("failed");
})

//clanak u novinama
const komentarSchema = new mongoose.Schema({
    news_id:{
        type: String,
        required: false
    },
    nickname:{
        type: String,
        required: false
    },
    comment:{
        type: String,
        required: false
    }
});

//export clanka
const komentari = mongoose.model("komentari", komentarSchema);
module.exports = komentari;