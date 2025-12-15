const http =require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res) => {
    // res.write("Hello from nodejs")
    // res.end()
    if(req.url === "/" || req.url === "/home") {
        // res.end(`
        //     <h1>Welcome</h1>
        //     <p> home page</p>
        //     `)
        // res.end(JSON.stringify({
        //     "name": "Lokendra",
        //     "Age": 25
        // }))
        // console.log("------------headers ----------------")
        // console.log( req.headers);
        // console.log("------------method ----------------")
        // console.log(req.method)
        
        // fs.readFile("text.txt", "utf-8", (err, data) => {
        //     res.end(data)
        // })

        let body = ""

        req.on("data", (chunk) => {
            body += chunk
        })

        req.on("end", () => {
            console.log(body);
            
        })

        res.end()
        
    } else if (req.url === "/about") {
        res.end("about page")
    } else {
        res.statusCode = 404
        res.end("Page not found")
    }
})

server.listen(3000, () => {
    console.log("sever is running on 3000 port");
    
})

// /home
// /about
// /lokendra