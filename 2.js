// function f1(){
// if(true){
//  console.log(x);
//  var x='local'
// }
// }
// f1()

// ----------------------------
// var p = new Promise(function() {
//     return "OK";
//    });
  
//    var p2 = p.then(function(data) {
//        return data;
//    });
   
//    var p3 = p2.then(function(data) {
//        return data + " Bye";
//    });
// -------------------------------------------------

// var p = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//      resolve("OK");
//  }, 2000);
// });

// p.then().then(function(data) {
//  console.log(data);
// });

// --------------------------------------

// var p = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//      resolve("OK");
//  }, 2000);
// }).then();

// var p2 = p.then(function(data) {
//  return data + " Good";
// })

// --------------------------------------

// var p = new Promise(function(resolve, reject) {
//  throw "Sorry";
// }).
// then((data) => console.log(data), (data) => data);

// ----------------------------------------

// var p = new Promise(function(resolve, reject) {
//  resolve("OK");
// });

// var p2 = p.then(function(data) {
//  return data;
// });

// var p3 = p.then(function(data) {
//  return data;
// });
// console.log(p2);
// console.log(p3);
// console.log(p2 === p3);

// --------------------------------------

// var p = new Promise(function(resolve, reject) {
//  resolve("OK");
// });

// var p2 = p.then(function(data) {
//  return new Promise(function(resolve, reject) {
//      resolve(`data is ${data}`);
//  });
// });

// p2.then(function(data) {
//  console.log(data);
// });