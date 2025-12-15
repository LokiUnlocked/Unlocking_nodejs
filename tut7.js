const http = require("node:http")
const url = require("node:url")

const server = http.createServer((req, res) => {

    const {pathname, query} = url.parse(req.url, true)
    console.log(query.name);
    console.log(query.age);
    console.log(query.city);
    
    
    if(pathname === "/") {
        res.end("home page")
    } else if(pathname === "/users" && req.method === "POST") {
        res.statusCode = 201
        res.end("user created success")
    }

     else {
        res.statusCode = 404
        res.end("not found")
    }
})

server.listen(3000, () => {
    console.log("sever is running on 3000 port");
    
})