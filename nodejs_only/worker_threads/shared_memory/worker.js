
// Here we are iterating through ints of a shared array that was created with a SharedArrayBuffer
// For running instructions, see main.js

const {parentPort} = require("worker_threads");

function getFib(num) {
  if (num === 0) {
    return 0;
  }
  else if (num === 1) {
    return 1;
  }
  else {
    return getFib(num - 1) + getFib(num - 2);
  }
}

parentPort.on("message", data => {
  data.nums.forEach(num => {
    parentPort.postMessage({num: num, fib: getFib(num)});
  });
})