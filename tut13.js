const { exec, spawn, fork } = require("node:child_process")
const http = require("node:http")

// exec("dir C:\ /s", (error, stdout, stderr) => {
//     if(error) console.log(error);
//     if(stderr) console.log(stderr)
//     console.log(stdout);


// })

// const child = spawn("dir C:\ /s", {shell: true})
// child.stdout.on("data", (chunk) => {
//     console.log(chunk.toString());

// })

const server = http.createServer((req, res) => {
    if (req.url === "/normal") {
        res.end("normal end point")
    } else if (req.url === "/heavy") {

        // const child = spawn("node", ["tut13_heavytask.js"])

        // let output = ""

        // child.stdout.on("data", (data) => {
        //     output += data.toString()
        // })

        // child.stdout.on("end", () => {

        //     res.end("count value is: " + output)
        // })

        const child = fork("./tut13_heavytask.js")
        child.send("this is send is by main process")
        child.on("message", (message) => {
            res.end("count value is: " + message)
        })
       
    }
})

server.listen(3000, () => {
    console.log("server is running on 3000 port");

})
