const  arr1 = [7653, 6734.34,'hello',true,null];

console.log(arr1);

const fruits = ['apple','orange','mango','lichi','kiwi','guava'];

console.log(fruits[3]);     //also works with strings
console.log(fruits[5]);     //also works with strings

console.log(fruits.indexOf('kiwi'));        //also works with strings

console.log(fruits.length);     //also works with strings

//slicing

console.log(fruits.slice(1,4)); //also works with strings
console.log(fruits.slice(1)); //also works with strings

price = '8932.4736';
console.log(price.slice(1));

//adding elements

fruits.push('banana');//adds element at the end
fruits.unshift('papaya'); //adds elements at the begining

console.log(fruits);



// femoving elements
fruits.pop(); // remove elements frome the endd
fruits.shift();  //removes element from the begining

console.log(fruits);