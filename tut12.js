const http = require("node:http")
const { Worker, isMainThread, parentPort, workerData } = require("node:worker_threads")

if(isMainThread) {
    const server = http.createServer((req, res) => {
        if (req.url === "/normal") {
            res.end("normal end point")
        } else if (req.url === "/heavy") {

            // const arr = [0]
            const shareArr = new SharedArrayBuffer(4)
            const arr = new Int32Array(shareArr)
            arr[0] = 0
            console.log(arr, "array before change");
            

            const worker = new Worker(__filename, {
                workerData: {limit: 10000000000, arr}
            })
            worker.on("message", (result) => {
                console.log(arr, "in main thread");
                
                res.end("count value is: " + result)

            })

            worker.on("error", (err) => {
                console.log(err);
                
            })
            
        
        }
    })

    server.listen(3000, () => {
        console.log("server is running on 3000 port");

    })
} else {
    const {limit, arr} = workerData
    
    let count = 0
    arr[0] = 100
    console.log(arr, "in worker thread");
    throw new Error("error")
    // for (let i = 0; i < limit; i++) {
    //     count++
    // }
    parentPort.postMessage(count)
}

// const server = http.createServer((req, res) => {
//     if (req.url === "/normal") {
//         res.end("normal end point")
//     } else if (req.url === "/heavy") {

//         const worker = new Worker("./tut12_heavytask.js")
//         worker.on("message", (result) => {
//             res.end("count value is: " + result)

//         })
        
      
//     }
// })

// server.listen(3000, () => {
//     console.log("server is running on 3000 port");

// })