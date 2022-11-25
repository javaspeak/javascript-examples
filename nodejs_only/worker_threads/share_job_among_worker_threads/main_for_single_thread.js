
// This example runs a single thread worker
//
// To run:
//
//     node main_for_single_thread.js
//     time curl --get http://localhost:3000/blocking 
//
// Output
//
//      result is 20000000000 curl --get http://localhost:3000/blocking  0.00s user 0.00s system 0% cpu 20.384 total
//
// This took 20 seconds to run
//
const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = process.env.PORT || 3000;

app.get("/non-blocking/", (req, res) => {
    res.status(200).send("This page is non-blocking");
});

app.get("/blocking", async (req, res) => {
  
    const worker = new Worker("./worker.js");
  
    worker.on("message", (data) => {
        res.status(200).send(`result is ${data}`);
    });
  
    worker.on("error", (msg) => {
        res.status(404).send(`An error occurred: ${msg}`);
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});