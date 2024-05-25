const myArr =[456,'Hello',true,console.log,[1,2,3]];

console.log(myArr);

const movies=['Tere Naam','Animal','PK','RRR','Deja Vu','Shaitaan'];

console.log(movies.length); //also works for strings

//indexing

console.log(movies[4]);  //also works for strings

console.log(movies.at(3));

movies[4]='SSS';    //replace index name
console.log(movies);

movies[6]='Awarapan';
console.log(movies);

console.log(movies .at(-3));

//slicing
console.log(movies.slice(1,4));  //also works for strings
console.log(movies.slice(1,40));
console.log(movies.slice(1));


const price='536.65/-';
console.log(price.slice(1,7));

//Adding New Elements

movies.push('The Dark Knight'); //add new elements at end of array
console.log(movies);

movies.unshift('The God father'); //add new element at start of array
console.log(movies);


//removing elements

movies.pop(); //removes last elements
movies.shift(); //removes first elements
console.log(movies);


//movies.splice(3,2 );//it will remove 2 elements starting from index erman
//movies.splice (3,2,'batman','superman','thor');//it will remove 2 elements starting from index 3 and add to new element


movies.splice(3,2,  'Batman','Superman','Thor' ); //starting element and how many remove then number (3rrr,2means sss removes)

console.log(movies);