// promises as a function constructor
let arr=[1,2,3,4,5];
const x= new Promise(
 (resolve,reject)=>{
if(arr.length>5){
 resolve(`array ${arr}`);
}
else{
 reject("error");

}

 }
);
x.then((values)=>{
console.log(values);
}).catch((error)=>{
console.log(error);
});