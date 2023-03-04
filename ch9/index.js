// event in node
const Event = require("events");

//  creating class
class MyEmitter extends Event {}

// creating object
const myEmitter = new MyEmitter();

/*
// example one (mltiple time call)
// Register event
myEmitter.on("event", () => {
  console.log("An event occured");
});

//  trigger event
myEmitter.emit("event");
*/

// example two (call only once)
let m = 0;
myEmitter.once("event", () => {
  console.log(++m);
});

//  trigger event
myEmitter.emit("event");
myEmitter.emit("event");
