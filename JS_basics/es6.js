function sayHello(){
    for(var i =0; i<5;i++){
        console.log(i);
        const z =3;
        var i = 'this';// we can re-define variable decleared with var in it's function but can't do same with let keyword 
        console.log(i);
    }
    console.log(i);// this is possible bcoz variable decleared with var keyword
    // console.log(z);//const also has block scope and can't update it 
    
}

sayHello();

// methods in object 
const person = {
 name: 'saksham',
 age: 21,
 WelcomeMessage() {
   console.log(this.name + ', wecome to this website');
   console.log(this); // here this provide current context of object 
   
 }
};
// person.WelcomeMessage();
// person.name = 'vishal';
// person.WelcomeMessage();

console.log(this); //this will print empty context bcoz this refers to node environment. 

// const targetMember = 'name';
// person[targetMember.value] = 'rohan';
// console.log(person.name);

// basic arrow function 
// const addTwo = (num1 , num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(6,3));

//implicit retur aerrow function
const addTwo = (num1 , num2) => num1+num2;
console.log(addTwo(6,3));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: true},
    {id: 4, isActive: false}
];
//  const activeJobs = jobs.filter(function(job){return job.isActive;});
 const activeJobs = jobs.filter((job)=> job.isActive);
console.log(activeJobs);
