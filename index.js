require("dotenv").config();

//access PORT variable from .env file
const port = process.env.PORT

//import express framework
const express = require('express')
const app = express()

const github={
    name:"bhagyashree",
    surname:"pawar",
    mobile:"8329182122"
}

///route /github
//how to send json data using res.json()
app.get("/github",(req,res)=>
{
    res.json(github)
})
//receive requests from browser
//route for http://localhost:4000/instagram
app.get('/instagram', (req, res) => {
    res.send("listening to instagram")
})

//route for http://localhost:4000/(home route)
app.get('/', (req, res) => {
    res.send("<h1>heyyy bhagyashree pawar</h1>")
})

//route for http://localhost:4000/chai
app.get("/chai",(req,res)=>
{
    res.send("<h1><i>heyy bro how are you doin??</i></h1>")
})


//server start from here
//listen req from port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
