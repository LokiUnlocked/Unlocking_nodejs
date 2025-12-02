const fs = require("fs")
const fsPromise = require("fs/promises")

// console.log("start");


// // fs.readFile("file.txt", "utf-8", (err, data)=> {
// //     if(err) console.log(err);
// //     console.log(data);


// // })

// const data = fs.readFileSync("file.txt", "utf-8")
// console.log(data);


// console.log("end");

// fs.writeFile('file.txt', "this is written by code 2", ()=> {
//     console.log("file write successfully");

// })
// fs.appendFile('file.txt', "\nthis is written by code 3", ()=> {
//     console.log("file write successfully");

// })
// fs.unlink('file.txt', ()=> {
//     console.log("file deleted successfully");

// })
// fs.mkdir('folder', ()=> {
//     console.log("folder created successfully");

// })
// fs.readdir('./', (err, file)=> {
//     if(err) console.log(err);
//     console.log(file);



// })
// fs.rmdir('node_modules', (err)=> {
//     if(err) console.log(err);
//     console.log("folder deleted successfully");

// })

// fs.rename("file.txt", 'text.txt', (err) => {
//     if(err) console.log(err);

//     console.log("file name changed");

// })



async function readFile() {
    const data = await fsPromise.readFile("text.txt", "utf-8")
    console.log(data);

}
readFile()
