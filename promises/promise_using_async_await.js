
// the async and await keywords are an alternative way of using Promises.
//
// Output is:
//
//    Error: Strings are not same
//
const helperPromise = function () {
   const promise = new Promise(function (resolve, reject) {
      const x = "node is cool";
      const y = "node is VERY cool";
      
      if (x === y) {
        resolve("Strings are same");
      } else {
        reject("Strings are not same");
      }
    });
 
    return promise;
};
 
async function demoPromise() {
    try {
        let message = await helperPromise();
        console.log(message);
    } catch (error) {
        console.log("Error: " + error);
    }
}
 
demoPromise();