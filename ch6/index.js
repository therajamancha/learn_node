const fs = require("fs");
const path = require("path");

/*
// make directory path shuld be there
fs.mkdir(path.join(__dirname,"component"), (error) => {
  if (error) throw error;
  console.log("Directory created");
});
*/

/*
// created folder if not availble
fs.mkdir(path.join(__dirname,"test/demo"), {recursive : true}, (error) => {
  if (error) throw error;
  console.log("Directory created");
});
*/

/*
// read folder and file
fs.readdir(path.join(__dirname,"test"),(error,files)=> {
  if(error) throw error
  for (const file of files) {
    console.log(file);
  }
})
*/

/*
// remove dir (folder should empty)
fs.rmdir(path.join(__dirname, "test/demo"), (error) => {
  if (error) throw error;
  console.log("removed directory");
});
*/

/*
// create file
fs.writeFile("readme.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("file created");
});
*/

/*
// read file
fs.readFile("readme.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

/*
// append data
fs.appendFile("readme.txt", " I am Raj", (err) => {
  if (err) throw err;
  console.log("file Updated");
});
*/

/*
// copy file
fs.copyFile("readme.txt", path.join(__dirname,"test/info.txt"), (err) => {
  if (err) throw err;
  console.log("file copied");
});
*/

// info
fs.stat( path.join(__dirname,"test/info.txt"), (err,states) => {
  if (err) throw err;
  console.log(states.isFile());
  console.log(states.isDirectory());
  console.log(states);
});