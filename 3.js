// function login(email,password){
 
// setTimeout(() => {
//  return email,password;
// }, 2000);

// }
// const user_email=login('sidra@gmail.com','Munteha66');
// console.log(user_email);

// -----------------------------------------

function myPromise(){

 return new Promise((resolve,reject)=>{
const my = false;
if(my){
           resolve("I Am Resolved Hurray")
}else{
     reject("Sorry I Am Rejected");
}
})}

myPromise().then(value=>console.log(value));

