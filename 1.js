/**  
 -----------
  promises
 -----------
*/
// var x = new Promise((resolve, reject) => {
//  reject(Error('The Fails!'))
// })
// x.catch(error => console.log(error))
// x.catch(error => console.log(error.message))



// -----------------------------------------


// var y = new Promise((resolve, reject) => {
//  return Promise.reject(Error('The Fails!'))
// })
// y.catch(error => console.log(error.message))
// y.catch(error => console.log(error.message))


// --------------------------------------


// var z = new Promise((resolve, reject) => {
//  resolve("Pomise Resolve!")
//  reject(Error('The Fails!'))
// })


// .catch(error => console.log(error))
// .then(error => console.log(error))


// ------------------------------------------------


// var p = new Promise((resolve, reject) => {

//  reject(Error('The Fails!'))
 
// })
// .catch(error => console.log(error))
// .then(error => console.log(error))

// ----------------------------------------------------


// var p = new Promise((resolve, reject) => {
//  reject(Error('The Fails!'))
// })
// .catch(error => console.log(error.message))
// .catch(error => console.log(error.message))


// ----------------------------------------


// new Promise((resolve, reject) => {
//  resolve('Success!')
// })
// .then(() => {
//  throw Error('Oh noes!')
// })
// .catch(error => {
//   console.log(error);
//  return "actually, that worked"
// })
// .catch(error => console.log(error.message))


// --------------------------------------------

// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   })

  // ---------------------------------------


  // Promise.resolve('Success!')
  // .then(data => {
  //   return data.toUpperCase()
  // })
  // .then(data => {
  //   console.log(data)
  //   return data
  // })
  // .then(console.log)

  // -------------------------------------

  // Promise.resolve('Success!')
  // .then(data => {
  //   data.toUpperCase()
  // })
  // .then(data => {
  //   console.log(data)
  // })

  // ---------------------------------------

  // Promise.resolve('Success!')
  // .then(() => {
  //   throw Error('Oh noes!')
  // })
  // .catch(error => {
  //   return 'actually, that worked'
  // })
  // .then(data => {
  //   throw Error('The fails!')
  // })
  // .catch(error => console.log(error.message))