// This is a simple example of a promise
//
// The output is:
//
//    Promise resolved successfully

const promise = new Promise(function (resolve, reject) {
    
    const string1 = "node is cool";
    const string2 = "node is cool";
    
    if (string1 === string2) {
        resolve();
    } else {
        reject();
    }
});
 
promise
    .then(function () {
        console.log("Promise resolved successfully");
    })
    .catch(function () {
        console.log("Promise is rejected");
    });