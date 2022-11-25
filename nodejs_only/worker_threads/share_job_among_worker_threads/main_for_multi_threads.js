
// This example runs 4 thread workers
//
// To run:
//
//     node node main_for_multi_thread.js
//     time curl --get http://localhost:3000/blocking
//
// Output
//
//      result is 20000000000 curl --get http://localhost:3000/blocking  0.00s user 0.00s system 0% cpu 5.244 total
//
// This took 5 seconds to run using 4 CPU
//
const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = process.env.PORT || 3000;
const THREAD_COUNT = 4;



app.get("/non-blocking/", (req, res) => {
    
    res.status(200).send("This page is non-blocking");
});

function createWorker() {
    
    return new Promise(function (resolve, reject) {
        
        const worker = new Worker("./four_workers.js", {
            workerData: { thread_count: THREAD_COUNT },
        });
        
        worker.on("message", (data) => {
            resolve(data);
        });
        
        worker.on("error", (msg) => {
            reject(`An error ocurred: ${msg}`);
        });
   });
}


app.get("/blocking", async (req, res) => {
    
    const workerPromises = [];
  
    for (let i = 0; i < THREAD_COUNT; i++) {
        
        workerPromises.push(createWorker());
    }

    const thread_results = await Promise.all(workerPromises);
  
    const total =
        thread_results[0] +
        thread_results[1] +
        thread_results[2] +
        thread_results[3];
  
    res.status(200).send(`result is ${total}`);
});


app.listen(port, () => {
    
    console.log(`App listening on port ${port}`);
});