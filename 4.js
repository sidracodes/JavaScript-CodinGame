// var promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//      resolve('hello world');
//  }, 2000);
// });

// promise.then(function(data) {
//  console.log(data);
// });

// -------------------------------------------------------

// var promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//      reject('We are all going to die');
//  }, 2000);
// });

// promise.then(function success(data) {
//  console.log(data);
// }, function error(data) {
//  console.error(data);
// });

// --------------------------------------------------------------
// var promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//      resolve('hello world');
//  }, 2000);
// });

// promise.then(function(data) {
//  console.log(data + ' 1');
// });

// promise.then(function(data) {
//  console.log(data + ' 2');
// });

// promise.then(function(data) {
//  console.log(data + ' 3');
// });
// --------------------------------------------------------------
// var promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//      reject('We are all going to die');
//  }, 2000);
// });

// promise.then(function success(data) {
//  console.log(data + ' 1');
// }, function error(data) {
//  console.error(data + ' 1');
// });

// promise.then(function success(data) {
//  console.log(data + ' 2');
// }, function error(data) {
//  console.error(data + ' 2');
// });

// promise.then(function success(data) {
//  console.log(data + ' 3');
// }, function error(data) {
//  console.error(data + ' 3');
// });

// -------------------------------------------------------------------------------
// var promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//      resolve('hello world 1');
//      resolve('hello world 2');
//      resolve('hello world 3');
//      resolve('hello world 4');
//  }, 1000);
// });

// promise.then(function success(data) {
//  console.log(data);
// });
// -----------------------------------------
function f1(){

//  console.log(x);
     // x is not defined 
 // console.log(y);
     // cannot access y before initialization
  // console.log(z); 
    // undefined

    // w=3;
    // console.log(w);
       // hoisting
x='hi';
// global scope
let y='hi';
// block scope
var z='hi';
// function scope
var w;
// supports hoisted
}
f1();

// console.log(x);
    // hi

// console.log(y);
    // y is not defined

// console.log(z);
   // z is not defined

// w=4;
// console.log(w)
    // 4


    // ---------------------------------------------
    
    // function job(data) {
    //     return new Promise((resolve,reject)=>{
    //        if(isNaN(data)){
    //         reject('error') }
    //         else if(data%2==1){
    //             setTimeout(()=>{resolve("odd")},1000) }
    //         else if(data%2==0){
    //     setTimeout(()=>{reject("even")},2000) }})}
            
    //         job(3)
    //         .then((data)=>{console.log(data)})
    //         .catch((error)=>{console.log(error)
    //         })
        
    // -----------------------------------------------------------


    // function job(delay) {
    //     return new Promise(function(resolve) {
    //         setTimeout(function() {
    //             console.log('Resolving', delay);
    //             resolve('done ' + delay);
    //         }, delay);
    //     });
    // }
    
    // var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);
    
    // promise.then(function(data) {
    //     console.log('All done');
    //     data.forEach(function(text) {
    //         console.log(text);
    //     });
    // });

    // ----------------------------------------------------------

    