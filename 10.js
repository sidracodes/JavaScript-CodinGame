// array of objects
const student=[ 
    {
        name:"sidra",
        rollno:1,
        class:"web 3.0"
    },
    {
        name:"rida",
        rollno:2,
        class:"web 3.0"
    },
    {
        name:"fiza",
        rollno:3,
        class:"web 3.0"
    },
    {
        name:"hira",
        rollno:4,
        class:"web 3.0"
    }
       

];

const oneobject={
    name:"sidra",
    rollno:1,
    class:"web 3.0",
    courses:["english","maths"],
    adress:{
        city: "islamabad",
        country: "pakistan"
    },
    f1: function(){
        return this.name + " khalid"
    }
};
console.log(oneobject);
console.log(oneobject.name);
console.log(oneobject.courses[1]);
console.log(oneobject.adress.city);
console.log(oneobject.f1());
console.log(student);
console.log(student[0]);
console.log(student[1].rollno);
console.log(student[3].class);

