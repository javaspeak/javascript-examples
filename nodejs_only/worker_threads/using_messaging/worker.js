
// This is the worker demonstrating messaging between the parent thread and a worker thread.
// 
// To run look at instructions in the main.js
//
const {parentPort} = require("worker_threads");

parentPort.on("message", data => {
    parentPort.postMessage({capitalizedText: capitalize(data.text)});
});

function capitalize(text) {
  
    return text.toUpperCase()
}