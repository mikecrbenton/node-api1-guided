const express = require("express")
const db = require('./database')

// create an instance of an Express server
// this creates the framework of what was all the code in server_raw.js
// Express.js takes care of a lot of the stuff under the hood
const server = express() 

// Installs middleware to allow Express JS
// to parse incoming JSON request bodies
server.use(express.json())

server.get("/", (req,res)=>{
   res.json( {message: "Connected Successfully!" } )
})

server.get("/users", (req, res) => {
   // simulating a real call to a database
   const users = db.getUsers()
   // return this fake data to the client
   res.json(users)
})

server.get("/users/:id", (req, res) => {

   // different way of accessing the params in express
   const id = req.params.id
   // simulating a real call to a database
   const user = db.getUsersById(id) // STRING !!
   // return this fake data to the client
   if(user){
      res.json(user) }
   else {
      res.status(404).json( {message: "User not found"} ) }

})

server.post("/users", (req,res) => {
   const newUser = db.createUser( {
      name: req.body.name  
   })
   res.status(201).json(newUser)
})

server.put("/users/:id", (req,res) => {

   const user = db.getUsersById(req.params.id)

   if(user) {
      const updatedUser = db.updateUser(user.id, { name: req.body.name } )
      res.json(updatedUser)
   }else{
      res.status(404).json( {message: "User not found"} ) 
   }

})

server.delete("/users/:id", (req,res) => {

   const user = db.getUsersById(req.params.id)

   if(user) {
      db.deleteUser(user.id)
      res.status(204).end() // successful empty response
   }else{
      res.status(404).json( {message: "User not found"} ) 
   }

})


module.exports = server

//=======WAYS TO SEND DATA FROM FRONT-END TO BACK-END============
// URL
// REQUEST BODY
// REQUEST HEADER
// QUERY STRING