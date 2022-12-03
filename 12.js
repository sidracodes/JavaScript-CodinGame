const f1=(data)=>{
 return new Promise((resolve, reject)=>{
  if(isNaN(data)){
   console.log('not a number');
  }
  else if( data%2 == 0){
resolve(  setTimeout(()=>{
 console.log('even')
},2000))
  }
  else if( data%2 == 1){
reject(  setTimeout(()=>{
 console.log('odd');
},1000))
  }
 })
}
async function f2(){
 try{

  const x= await f1(4);
  console.log(x);

 }
 catch(error){
console.log(error);
 }
}

f2();




