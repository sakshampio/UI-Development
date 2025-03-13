// rest 
function addNumbers(a,b,c,...other){
    console.log(other);// here other act as an array
    
 return a+b+c;
}
const res = addNumbers(3,5,1,8,6);
console.log(res);

//spread 
let name = ['ajay','anuj','vivek'];
function getName(name1, name2, name3){
    console.log(name1, name2, name3);
}
// getName(name[0],name[1],name[2]);
getName(...name);

// spread with objects 
var students={
    name: 'saksham',
    age:21,
    hobbies: 'cricket'
};

const{age,...rest} = students;
console.log(rest);

// spread 
var newStudents ={
    ...students, 
    age: 22
};
console.log(newStudents);

// merging arrays wih spread 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); 


// for each loop 
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) {
  console.log(`${index}: ${fruit}`);
});

// for each using arrow function 
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));
