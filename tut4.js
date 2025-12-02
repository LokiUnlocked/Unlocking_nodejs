// const express = require("express");
const fs = require("fs");
const zlib = require("zlib")
// const status = require("express-status-monitor")

// const app = express();
// app.use(status())

// app.get("/", (req, res) => {
//     // fs.readFile("bigfile.txt", "utf-8", (err, data) => {
//     //     if (err) {
//     //         return res.status(500).send("Error reading file");
//     //     }

//     //     res.setHeader("Content-Type", "text/plain");
//     //     res.send(data);
//     // });

//     const readfileStream = fs.createReadStream("bigfile.txt", "utf-8")
//     readfileStream.pipe(res)

//     readfileStream.on("error", () => {
//         return res.status(500).send("Error reading file");
//     })
// });

// app.use((req, res) => {
//     res.status(404).send("Route not found");
// });

// app.listen(3000, () => {
//     console.log("Express server running at http://localhost:3000");
// });

const readStream = fs.createReadStream("bigfile.txt", "utf-8")
const writeStream = fs.createWriteStream("write2.txt")

// writeStream.write("hello")
// writeStream.write("world!")
// writeStream.end()

// readStream
// .pipe(zlib.createGzip())
// .pipe(writeStream)

readStream.on("data", (chunk) => {
    writeStream.write(chunk)
})

writeStream.on("finish", () => {
    console.log("file written successfully");
    
})