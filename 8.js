let x = ["sidra", 23, true];
console.log(x);
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
console.log(`the legth of array is : ` + x.length);
let y=[];
console.log(y);

        y.push( 'sunday');
        y.push( 'monday');
        y.push( 'tuesday');
        y.splice(3,0,"wednesday")
   
console.log(y);


console.log( x + y);
console.log( x.concat(y));
y.shift();
console.log(y);
    y.unshift("sunday");
    console.log(y);

y.push( 5);
y.push( 6);
y.push( 7);
console.log(y);
y.splice(4,3);
console.log(y);
y.splice(1,3,"fundays")
console.log(y);

const z=[1,2,3,4,5,6];
let b=z.find(  m=> m===3);
console.log(b);

let w=[1,2,3,11,0,4,5,6];

console.log(w.sort());
console.log(w.reverse());

let array1=[1,2,3];
let array3=[4,5,6];
let array2=[array1,array3];
console.log(array2);
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[0][2]);
console.log(array2[1][2]);
let array4=[array1,array3,...array2];
console.log(array4);
console.log(array4[0]);
console.log(array4[1]);
console.log(array4[2]);
console.log(array4[3]);
