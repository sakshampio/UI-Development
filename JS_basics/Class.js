
class Person {
    constructor(name){
        this.name = name;
        console.log(name);
        
    }
    walk(){
        console.log('walk');
    }
}
 class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('teach');
        
    }
 }
// const person = new Person('saksham');
// person.walk();

const teacher = new Teacher('garg','b.tech');
teacher.teach();

// prototypal inheritance 
const parent = {
    greet(){
        console.log("hii ");
        
    }
};

const child = Object.create(parent);
child.greet();