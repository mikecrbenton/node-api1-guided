const express = require("express")
const db = require("./database")

// create an instance of an Express server
const server = express()

// Needed in order for Express to parse out JSON bodies 
server.use( express.json() )

server.get("/", (req,res)=>{
   res.json( {message: "Hello, World" } )
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
      name: req.body.name  // instead of hardcoding a name, correlates with line 8
   })
   res.status(201).json(newUser)
})

server.put("/users/:id", (req,res) => {
   const id = req.params.id
   const user = db.getUsersById(id)

   if(user) {
      const updatedUser = db.updateUser(id, { name: req.body.name } )
      res.json(updatedUser)
   }else{
      res.status(404).json( {message: "User not found"} ) 
   }

})

server.delete("/users/:id", (req,res) => {
   const id = req.params.id
   const user = db.getUsersById(id)

   if(user) {
      db.deleteUser(id)
      res.status(204).end() // successful empty response
   }else{
      res.status(404).json( {message: "User not found"} ) 
   }

})

// web servers need to be continuously listening
server.listen(8080, ()=>{
   console.log("server started on port 8080")
})