function multiplyBy5(a){
return a*5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // here function is working as an object 
console.log(multiplyBy5.prototype); // the prototype of this is null 


function createUser(name , score ){
    this.name  =name;
    this.score =score ;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
 console.log(`score is ${this.score}`);
 
}

const user1 =new createUser('vishal', 23);
const user2 =new createUser('rohan', 250);

user1.printMe();
 