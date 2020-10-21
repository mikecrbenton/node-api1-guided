// FIRST WEB SERVER -- from scratch

// const http = require("http")

// // req - get info from http request
// // res - send info to caller
// const server = http.createServer( ( req, res ) => {

//    res.statusCode = 200

//    // specify the type of data
//    res.setHeader("Content-Type", "text/html")
//    // send the data
//    res.write("<h1>Hello, World</h1>")

//    // send this response to client
//    res.end()
// })
// // web servers need to coninuously listening
// server.listen(8080, ()=>{
//    console.log("server started")
// })