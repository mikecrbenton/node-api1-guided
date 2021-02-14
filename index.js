 // importing the server - this is why node index.js NOT node server.js
const server = require("./server.js")

server.get("/", (req,res)=>{
   res.json( {message: "Hello, World" } )
})

// web servers need to be continuously listening
server.listen(8080, ()=>{
   console.log("server started on port 8080")
})