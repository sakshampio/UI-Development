let myName  = 'saksham   ';
// console.log(myName.trim().length); 
// here declearing a property trueLength
console.log(myName.trueLength); 


let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor : 'hammer',
    hulk :'anger',
    getThorPower : function(){
        console.log(`thor power is ${this.thor}`);
        
    }
}

Object.prototype.saksham = function(){
    console.log('this is present in all objects');
    
}
//
heroPower.saksham();

myHeros.saksham();

// about sharing objects properties we use __proto__
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
isAvailable : false
}
const TASupport = {
    makeAssignment : 'js assignment',
    fillTime : true,
    __proto__ : TeachingSupport
}

let anotherUserName = "jbfbsjndn   ";
String.prototype.trueLength = function(){
    console.log(`${this}`); // this is providing the true length of an string 
    console.log(`true length is : ${this.trim().length}`);
}
anotherUserName.trueLength();
console.log("saksham".trueLength);