const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
const router = express.Router();

const bcrypt = require('bcrypt');
const User = require('./mongo.js');

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
        // User already exists
        res.json("exist");
        return;
      } else {
        
        // User does not exist, save the new user
        res.json("notexist");
        await newUser.save();
        return res.status(201).json({ message: 'Registration successful' });
      }
    } catch (error) {
      // Handle registration failure
      console.error(error);
      return res.status(500).json({ error: 'Registration failed' });
    }
  });




app.listen(8000, ()=>{
    console.log("portconnected")
})