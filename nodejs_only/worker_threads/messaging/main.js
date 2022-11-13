
// This example shows using messaging between the parent and worker thread.
// The worker thread capitalizes the text passed to it and returns it.
//
// To run:
//
//     node main.js
//
// Output:
//
//    HELLO
//    GOODBYE
//
const {Worker} = require("worker_threads");

//Create new worker
const worker = new Worker("./worker.js");

// Listen for a message from worker
worker.on("message", result => {
  console.log(`${result.capitalizedText}`);
});

worker.on("error", error => {
  console.log(error);
});

worker.postMessage({text: 'hello'});
worker.postMessage({text: 'goodbye'});