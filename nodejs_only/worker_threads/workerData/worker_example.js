
// This worker thread is spawned by main.js
//
// See main.js for instructions to run
//
const { workerData, parentPort } = require('worker_threads')

console.log('Inside worker_example.js')
parentPort.postMessage({ welcome: workerData })