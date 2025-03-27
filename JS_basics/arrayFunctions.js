setTimeout(() => {
    console.log("Your download will start shortly.");
}, 3000);    

// higher order functions or call back functions 

function add (a , b , cb ){
    let res = a+b;
    cb(res);
}
function showResult(result)
{
    console.log(result);
    
}
// can pass function as an argument 
add(2,  4, showResult);
 // for each 
 const numbers = [2,3,4,5,6];
 numbers.forEach(number => console.log(number*2));
console.log(numbers);// so for each will not change origional array it will perform operation on it,s element 
  
// find function and (findIndex - find index) 
let ans = numbers.find((num) => num === 4);
console.log(ans);
// includes function return boolean
let a = numbers.includes(3);
console.log(a);

// slice function 
let newArray = numbers.slice(1,5);  
console.log(newArray);
 // splice will do implace hangers and return element 
let arr = [1,2,3,4,5,6,7,8];
let newArr = arr.splice(1,4);
console.log(newArr);
console.log(arr);

/// reduce function in an array 
  const prices = [32,43,54,76,3,2];
  const total = prices.reduce(sum);
 console.log(total);
 
  function sum(acc, curr){
    return acc + curr;
  }

  // finding maximu  values 
  const num = [32,43,54,76,3,2];
  const maxNum = num.reduce(getMax);
console.log(maxNum);

  function getMax(acc , curr){
    return Math.max(acc,curr);
  }

  // some and every method 
  let ages = [32,34,54,22];
  let result = ages.some(checkAdult);
 console.log(result);
 
  function checkAdult(age ){
   return age >=18;
  }

  // concate function 
  const first = [1,2,4];
  const second = [5,6,7];
  const combined = first.concat(second);
  

