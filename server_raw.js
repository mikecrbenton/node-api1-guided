// //FIRST WEB SERVER -- from scratch

// const http = require("http")// from node.js std lib


// // req - get info from http request
// // res - send info to caller

// const server = http.createServer( ( req, res ) => {

//    // ========= 3 THINGS BROWSER REQUIRES ==============

//    // 1) STATUS CODE=========
//    res.statusCode = 200
//    // 2) RESPONSE HEADER===== specify the type of data( server name, cached ? etc...)
//    res.setHeader("Content-Type", "text/html")
//    // 3) DATA================ ( JSON, HTML ?  etc... )
//    res.write(`<h1>Hello, World. Time is ${new Date()}</h1>`)

//    // send this response to client
//    res.end()
// })
// // web servers need to continuously listening
// server.listen(8080, ()=>{
//    console.log("vanilla node server started")
// })