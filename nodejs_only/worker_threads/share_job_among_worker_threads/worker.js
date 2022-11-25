
// This worker.js is used with main_for_single_thread.js
//
// To see how to run the example look at main_for_single_thread.js
//
const { parentPort } = require("worker_threads");

let counter = 0;

for (let i = 0; i < 20_000_000_000; i++) {
    counter++;
}

parentPort.postMessage(counter);