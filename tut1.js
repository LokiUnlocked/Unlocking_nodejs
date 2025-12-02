const fs = require('fs')

console.log("start");

fs.readFile("file.txt", () => {
    console.log("file read successfully");
    
})

// setImmediate(() => {
//     console.log("setimmmediate run");
    
// })

// setTimeout(() => {
//     console.log("settimeout run");
    
// }, 0);

// Promise.resolve("promise resolved").then(data => {
//     console.log(data);
    
// })

console.log("end");

// macro task queue --> timers
// micro task queue --> promise (priority)