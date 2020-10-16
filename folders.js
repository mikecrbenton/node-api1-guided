// This 'require' syntax is another way to import a 3rd party library
// node.js doesn't support 'import' 

// fs = filesystem - it's built into node stn lib
const fs = require("fs") 

fs.mkdirSync("global_folder") // creates a folder in current location

for( let i = 97; i <= 122 ; i++ ){
   const letter = String.fromCharCode(i)
   fs.mkdirSync(`global_folder/${letter}`)
}

