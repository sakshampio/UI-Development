// for loop in js 
for(let i=0;i<10;i++){
   if(i % 2 == 0) console.log(i);
}

// forin loop 
let players= {
 name : 'rohit',
 age: 37,
 avg: 48.8
};
// for in loop
// it is generally used to provide keys of an object
for (const key in players) {
        const element = players[key];
        console.log(key); 
        
    }
    // for of loop 
    // used for iterable data structure
for (const c of 'harry') {
    console.log(c);
}

// while loop 
let i=5;
console.log('going in do_while loop ')
do{
    console.log(i);
    i++;
}while(i<5);
