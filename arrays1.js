const myArr =[456,'Hello',true,console.log,[1,2,3]];

console.log(myArr);

const movies=['Tere Naam','Animal','PK','RRR','Deja Vu','Shaitaan'];

console.log(movies.length); //also works for strings

//indexing

console.log(movies[4]);  //also works for strings

console.log(movies.at(3));

movies[4]='SSS';    //replace index name
console.log(movies);

console.log(movies .at(-3));

//slicing
console.log(movies.slice(1,4));  //also works for strings
console.log(movies.slice(1,40));
console.log(movies.slice(1));


const price='536.65/-';
console.log(price.slice(1,7));

