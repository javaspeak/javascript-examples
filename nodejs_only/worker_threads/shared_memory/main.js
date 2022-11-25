
//
// Here we are using Atomics and a SharedArrayBuffer to ensure atomicity of read and write on a
// shared array.
//
// In this example we are uings Atomics.store to store ints in a shared array.  In the worker 
// we are just iterating through the elements and retrieving the values without requiring a special
// Atomics read method.
//
// To run:
//
//     node main.js
//
// Output is:
//
//     21th Fibonacci Number: 10946
//     33th Fibonacci Number: 3524578
//     15th Fibonacci Number: 610
//     40th Fibonacci Number: 102334155


const {Worker} = require("worker_threads");

let nums = [21, 33, 15, 40];

//get size of the array buffer with int32 size buffer for each element in the array
const size = Int32Array.BYTES_PER_ELEMENT*nums.length;

//create the buffer for the shared array
const sharedBuffer = new SharedArrayBuffer(size);
const sharedArray = new Int32Array(sharedBuffer);

nums.forEach((num, index) => {
  Atomics.store(sharedArray, index, num);
})

//Create new worker
const worker = new Worker("./worker.js");

//Listen for a message from worker
worker.on("message", result => {
  console.log(`${result.num}th Fibonacci Number: ${result.fib}`);
});

worker.on("error", error => {
  console.log(error);
});

worker.postMessage({nums: sharedArray});