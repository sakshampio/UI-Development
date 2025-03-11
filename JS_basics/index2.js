// reference type in js
//creating objects  
let person = {
     name : 'saksham',
     age: 20
};
console.log(person);

// can use dot notation to accecc the property of object 
person.name = 'garg';
console.log(person.name);
// can also use bracket notation for this 
let selection = 'name';
person[selection] = 'vishal';
console.log(person[selection]);

// arrays in js 
let selectedColors = ['red','green','yellow'];// index starts from zero
selectedColors[3] = 3;
console.log(selectedColors.length);
console.log(selectedColors[2]);

// functions in js 
function greet(name, lname){
    console.log('hello '+ name + ' '+ lname);
}
greet('vaibhav','jain');

function square(number){
    return number * number;
}
let sq = square(5);
console.log(sq);