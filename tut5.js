const fs = require("fs")

// const buf = Buffer.from("Hello World!")
// // const buf = Buffer.alloc(10)
// // const buf = Buffer.allocUnsafe(10)
// console.log(buf);
// buf[0] = 97
// console.log(buf);
// console.log(buf.toString());

const readStream = fs.createReadStream("text.txt")
readStream.on("data", (chunks) => {
    console.log(chunks);
    console.log(chunks.toString());
    
})
