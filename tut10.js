const os = require("node:os")
const fs = require("node:fs")
// console.log(os.type());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.totalmem() / 1024 / 1024 / 1024);
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.uptime() / 3600);
// console.log(os.networkInterfaces());
// console.log(os.arch());
// console.log(os.EOL);
// \r\n
// \n

const arr = [
    "name, age",
    "Lokendra, 25",
    "Harshit, 26"
].join(os.EOL)

// fs.writeFileSync("file.csv", arr)
console.log(os.freemem() / 1024 / 1024 / 1024);



