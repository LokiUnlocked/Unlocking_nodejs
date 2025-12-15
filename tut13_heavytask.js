let count = 0
// for (let i = 0; i < 10000000000; i++) {
//     count++
// }

// process.stdout.write(count.toString())
process.send(count)
process.on("message", (msg) => {
    console.log(msg, "this is in child process");
    
})