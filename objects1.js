const student = {
    name: 'Faisal',
    rollno: 12345,
    email: 'faisalshaikh@gmail.com'


}

console.log(student);

console.log(student.name);
console.log(student['name']);

student.address = 'Lucknow';

console.log(student);

student.rollno = 54321;

console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));

const smartphone = {
    brand: 'iphone',
    model: 'i15',
    price: 69000,
    colors: ['gray', 'black', 'red']
}
console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors.push('Green'); //to add new element of array in index colors,

console.log(smartphone);


//console.log(Object.keys(smartphone));
//console.log(Object.values[smartphone]);

const smartphonelist = [
    { brand: 'iphone', model: 'i15', price: 69000, colors: ['black','white', 'gray'] },
    { brand: 'samsung', model: 's23', price: 119000, colors: ['red', 'blue'] },
    { brand: 'vivo', model: 'v23', price: 29000, colors: ['yellow', 'green'] },
    { brand: 'oppo', model: 'reno', price: 39000, colors: ['purpal', 'white'] },
    { brand: 'oneplus', model: 'nord', price: 25000, colors: ['red','orange', 'pink'] }
];



console.log(smartphonelist.length);
console.log(smartphonelist[0].price);//get the one element of array list

console.log(smartphonelist[0].colors[0]);

smartphonelist[0].colors.push('blue');
console.log(smartphonelist);

//print price of 4th smartphone

console.log(smartphonelist[3].price);

//filter all smartphones with lower then 30000

const budgetphones=smartphonelist.filter((phone)=>{return phone.price});

console.log(budgetphones);