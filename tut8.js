const EventEmitter = require("node:events")
// const emitter = new EventEmitter()

// function callbackFn (name, data) {
//     console.log("hello ", name);
//     console.log(data);
    
    
// }
// function callbackFn2 (name, data) {
//     console.log("callbackfn 2");
    
//     console.log("hello ", name);    
    
// }

// emitter.on("greet", callbackFn)
// emitter.on("greet", callbackFn2)
// // emitter.once("greet", callbackFn)

// // emitter.removeListener("greet", callbackFn2)
// emitter.removeAllListeners("greet")

// emitter.emit("greet", "Lokendra", "how are you")
// // emitter.emit("greet", "Harshit", "how are you")

class Logger extends EventEmitter {
    log(message) {
        this.emit("messageLogged", message)
    }
}

const logger = new Logger()

logger.setMaxListeners(15)

logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})
logger.on("messageLogged", (msg) => {
    console.log(msg);
    
})

logger.log("Hello world")
console.log(logger.listenerCount("messageLogged"));
