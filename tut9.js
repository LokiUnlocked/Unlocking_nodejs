const path = require("node:path")

const folder = "project"
const filename = "text.txt"

// console.log(path.join(folder, filename));
// console.log(path.resolve(folder, filename));
// console.log(path.basename("folder\\subfolder"));
// console.log(path.basename("C:\\Users\\gupta\\OneDrive\\Desktop\\youtube\\node\\folder\\file.js", ".txt"));
// console.log(path.dirname("C:\\Users\\gupta\\OneDrive\\Desktop\\youtube\\node\\folder\\file.js"));
// console.log(path.extname("package.json"));
// console.log(path.parse("C:\\Users\\gupta\\OneDrive\\Desktop\\youtube\\node\\folder\\file.js"));

// console.log( 'C:\\Users\\gupta\\OneDrive\\Desktop\\youtube\\node\\folder');
// console.log(path.format({
//   root: 'C:\\',
//   dir: 'C:\\Users\\gupta\\OneDrive\\Desktop\\youtube\\node\\folder',
//   base: 'file.js',
//   ext: '.js',
//   name: 'file'
// }));

console.log(path.join(__dirname, "subfolder", "file.txt"));





// C:\Users\gupta\OneDrive\Desktop\youtube\node\text.txt
// text.txt
// folder\file.txt
// C:\Users\gupta\OneDrive\Desktop\youtube\node\folder\file.txt