
// This four_workers.js is used with main_for_multi_threads.js
//
// To see how to run the example look at main_for_multi_threads.js
//
const { workerData, parentPort } = require("worker_threads");

let counter = 0;

for (let i = 0; i < 20_000_000_000 / workerData.thread_count; i++) {
    
    counter++;
}

parentPort.postMessage(counter);
