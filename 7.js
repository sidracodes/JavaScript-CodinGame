const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
console.log(theList);
theList.shift();
theList.pop();
console.log(theList);
theList.unshift("FIRST");
console.log(theList);
 // theList[3]="hello world";
theList.splice(3,1,"hello world")
console.log(theList);
 // theList[2]="MIDDLE";
theList.splice(2,1,"MIDDLE");
console.log(theList);
theList.splice(4,3);
// theList.pop();theList.pop();theList.pop();
console.log(theList);
theList.push("LAST");
console.log(theList);