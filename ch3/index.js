// node js path module
const path = require("path");

/*
// it gives name of this file base of file
console.log(path.basename(__filename));
// remove extension
console.log(path.basename(__filename,'.js'));
*/

/*
// gives a directory name automaticly by os
console.log(path.dirname(__filename));
*/

/*
// gives extenstion name ( last dot )
console.log(path.extname(__filename));
*/

/*
// join the all string in parameter and give path ( to create path)
console.log(path.join("/search","product/apple","/iphone"));
console.log(path.join("/search","product/apple","//iphone"));
// .. use for go back to directory 
console.log(path.join("/search","product/apple","/iphone",".."));
console.log(path.join("/search","product/apple","/iphone","..",'..'));
// to create new file path in this directory
console.log(path.join(__dirname,"app.js"));
*/

/*
// normalize path
console.log(path.normalize("\\\c:\\\\cs\\search\\\\bike"));
console.log(path.normalize("\\\c:\\\\cs\\search\\\\bike\\..\\"));
*/

/*
// parse the path
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);
*/

/*
// cheak if path is right and give true false value
console.log(path.isAbsolute("//cs//sas"));
console.log(path.isAbsolute(__filename));
*/