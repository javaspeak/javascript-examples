
// Note that "then" returns another promise

// Note that we purposely add an undefined variable called doesNotExist 
// which triggers an error.  This error is caught in the catch
//
// Output is:
//
//     1
//     2
//     Promise is rejectedReferenceError: doesNotExist is not defined

new Promise(function(resolve, reject) {
    
    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    console.log(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    console.log(result); // 2
    return doesNotExist

}).then(function(result) {

    console.log(result); // fails to print
}).catch(function (e) {
    
    console.log("Promise is rejected: " + e);    
});
