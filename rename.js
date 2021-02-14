const fs = require("fs") // nodes way of importing ( unable to use import )

// Read all folders in directory(data)
for(const filename of fs.readdirSync("data")) {
   console.log(filename)
   const baseName = filename.substr(0, filename.lastIndexOf(".") )
   fs.renameSync(`data/${filename}`, `data/${baseName}.md`)
}
