const express = require('express')

const SERVER_PORT = process.env | 8089;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/hello", (req, res) => {
    res.send('Hello Express Js')
})

// query parameter
app.get("/user", (req, res) => {
    data = req.query
    res.json(data)
})
//path parameter
app.post("/user/:fname/:lname", (req, res) => {
    data = req.params
    let firstName = req.params.fname
    let lastName = req.params.lname
    res.json(data)
})

app.listen(SERVER_PORT, () => {
    console.log('Server is running');
  });
  