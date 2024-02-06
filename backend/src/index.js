const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

const bcrypt = require('bcrypt');
const User = require('./mongo.js');
const clanak = require('./mongo1.js');
const multer = require('multer');
const path = require('path')

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const secretKey = 'jwt-secret-key';


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(cookieParser());




//login
app.post('/LogIn', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) {
        res.status(401).json({ error: 'Authentication failed' });
        return;
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        res.status(401).json({ error: 'Authentication failed' });
        return;
      }
      
      // Create a JWT token
      const token = jwt.sign({username: user.username}, secretKey, {
        expiresIn: '1h',
      });
      
      res.status(200).json({ token });
      return;

    } catch (error) {
      res.status(500).json({ error: 'Authentication failed' });
    }
  });
  
 




//sign up
app.post("/SignUp", async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create a new user instance with the hashed password
      const newUser = new User({
        username: username,
        password: hashedPassword
      });
  
      // Check if the username already exists
      const existingUser = await User.findOne({ username: username });
  
      if (existingUser) {

        res.status(500).json({ error: 'Registration failed' });
      } 
      else {
        await newUser.save();
        res.status(201).json({ message: 'Registration successful' });
        return;
      }
    } catch (error) {
      // Handle registration failure
      console.error(error);
      res.status(500).json({ error: 'Registration failed' });
    } 
  });



//za slike
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    return cb(null, '../public/Images')
  },
  filename: function (req, file, cb){ 
    console.log(file)
    return cb(null, `${Date.now()}_${(file.originalname)}`)
  }
}) 
const upload = multer({storage})

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title, subtitle, text } = req.body;

    // Check if req.file exists before accessing its properties
    const fileName = req.file ? req.file.filename : null;

    // Create a new clanak instance
    const newClanak = new clanak({
      title: title,
      subtitle: subtitle,
      text: text,
      file: fileName
    });

    await newClanak.save();
    res.status(201).json({ message: 'Uspesan unos' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Neuspesan unos' });
  }
});

app.get('/objavi', (req, res) => {

})



app.listen(8000, ()=>{
    console.log("portconnected")
})









{/*const { title, subtitle, text, file} = req.body;
  console.log(req.body);
  try {
    
    // Create a new clanak instance 
      const newClanak = new clanak({
      title: title,
      subtitle: subtitle,
      text: text,
      file: file
    });

      await newClanak.save();
      res.status(201).json({ message: 'Uspesan unos' });
      return;
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Neuspesan unos' });
  } */}