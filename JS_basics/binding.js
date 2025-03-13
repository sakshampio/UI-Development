// const players = {
//     name: 'rohit',
//     age: 37,
//     walk() {
//   console.log(this);
  
//     }
// };

// players.walk();// this will show object

// // walk();// here it will tell that reference of walk is not defined for fixing this we can use bind keyword
// const walk = players.walk.bind(players);
// walk();

//
// const players = {
//     name: 'rohit',
//     age: 37,
//     walk() {
//         setTimeout(function(){
//             console.log('this' + this); // this will return window object 
//         },1000);
//     }
// };
const players = {
    name: 'rohit',
    age: 37,
    walk() {
        const self = this;
        setTimeout(function(){
            console.log('self' + self); // this will return object reference
        },1000);
    }
};


// function Person() {

//     this.age = 0;
  
//     setTimeout(() => {
//       this.age++; // `this` refers to the Person instance
//       console.log(this.age);
//     }, 1000);
//   }
  
//   const person = new Person();
//   In this example, the arrow function inside setInterval inherits this from the Person function, ensuring that this.age refers to the Person instance.
//   we can do this with hte help of arrow function bcoz arrow function don't inherit binding

players.walk();