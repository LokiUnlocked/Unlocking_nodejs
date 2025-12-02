const dotenv = require("dotenv")
const demo = require("./tut2a.js")

dotenv.config()
demo()

// console.log(global);
// console.log(__dirname);
// console.log(__filename);

// console.log(process.pid);
// console.log(process.cwd());
// console.log(process.version);
// console.log(process.platform);
// console.log(process.env.PORT);
// console.log("start");
// console.log(process.exit());
// console.log("end");


// console.log(process.argv);

// setInterval(() => {
//     console.log("settimeout run");
    
// }, 1000);

global.x = 10
console.log(x);



