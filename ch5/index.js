const fs = require("fs/promises");
const path = require("path");

// console.log(path.join(__dirname, "test/demo.js"));

/*
// created directory
(async () => {
  try {
    // make directy demo.js if test folder not awaileble then create using second parameter
    await fs.mkdir(path.join(__dirname, "test/demo"), { recursive: true });
    console.log("Created");
  } catch (error) {
    console.log(error);
  }
})();
*/

/*
// console.log(path.join(__dirname,"test"));
// read content in directory
(async () => {
  try {
    // it give all file and folder in this path
    const files = await fs.readdir(path.join(__dirname, "test"));
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    console.log(error);
  }
})();
*/

/*
// remove directory
(async () => {
  try {
    await fs.rmdir(path.join(__dirname, "test/demo"));
    console.log("removed");
  } catch (error) {
    console.log(error);
  }
})();
*/

/*
// created file if not availeble and write evry time on run
(async () => {
  try {
    await fs.writeFile("readme.txt", "Hello Node Js");
  } catch (error) {
    console.log(error);
  }
})();
*/

/*
// read file
(async () => {
  try {
    const data = await fs.readFile("readme.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
*/

/*
// append file 
(async () => {
  try {
    await fs.appendFile("readme.txt", " Raj Amancha");
  } catch (error) {
    console.log(error);
  }
})();
*/

/*
// copy file to anywere
(async () => {
  try {
    await fs.copyFile("readme.txt", path.join(__dirname,"test/info.txt"));
    // await fs.copyFile("readme.txt", "info.txt");
  } catch (error) {
    console.log(error);
  }
})();
*/

// 
(async () => {
  try {
    const states = await fs.stat(path.join(__dirname,"test/app.js"));
    console.log(states.isDirectory());
    console.log(states.isFile());
    console.log(states);
  } catch (error) {
    console.log(error);
  }
})();
