const express = require('express');
const app = express();
const router = express.Router();
const userJson = require("./user.json")
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(__dirname+'/home.html');
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.json(userJson);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  if(req.query.user == "Sarah" && req.query.pass == "sar123"){
    res.status(200).send("User Is valid")
  }

  if(req.query.user != "Sarah"){
    res.status(405).send("User Name is invalid")
  }

  if(req.query.pass != "sar123"){
    res.status(405).send("Password is invalid")
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
    res.send(`<strong>${req.params.username} successfully logout.</strong>`)

});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));