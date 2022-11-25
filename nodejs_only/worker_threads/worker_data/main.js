
// This example spawns off a worker thread and waits for it to complete. The main thread passes 
// "hello John Doe" to the worker thread and the worker thread returns in back to the main thread 
// on completion as json.
//
// To run:
//
//     node main.js
//
// Output:
//
//     workerData: hello John Doe
//     Inside worker_example.js
//     { welcome: 'hello John Doe' }
// 
const { Worker } = require('worker_threads')

const runService = (workerData) => {
    
    console.log('workerData: ' + workerData)
    
    return new Promise((resolve, reject) => {
    
        // import workerExample.js script..
    
        const worker = new Worker('./worker_example.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`stopped with  ${code} exit code`));
        })
    })
}

const run = async () => {
    const result = await runService('hello John Doe')
    console.log(result);
}

run().catch(err => console.error(err))