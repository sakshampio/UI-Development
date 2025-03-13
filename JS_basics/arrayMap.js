const colors = ['red', 'green','blue'];
const items = colors.map(color => '<li>' + color + '</li>');
console.log(items);

//object
const address = {
    street:'',
    city:'',
    country:''
};
const street = address.street;
//restructing  of an object 
const{street :st, city, country } = address;
