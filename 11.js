// promise as a object
const f1= ( data) => {
 return new Promise(
  ( resolve, reject )=>{
if( data % 2 == 0){
 setTimeout(()=>{ resolve('even')},2000)

}
else if( data % 2 == 1){
 setTimeout(()=>{ reject('odd')},1000)

}
else if(isNaN(data)){
 reject('not a number')
}

  }
 )
}
f1('k').then(
(x)=>{
 console.log(`${x}`)
}
).catch(
(y)=>{
 console.log(y)
}
);