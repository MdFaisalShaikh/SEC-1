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
    { brand: 'samsung', model: 's23', price: 119000, colors: ['red', 'blue','black'] },
    { brand: 'vivo', model: 'v23', price: 29000, colors: ['yellow', 'green'] },
    { brand: 'oppo', model: 'reno', price: 39000, colors: ['purpal', 'white'] },
    { brand: 'oneplus', model: 'nord', price: 25000, colors: ['red','orange', 'pink'] },
    { brand: 'samsung', model: 's24', price: 129000, colors: ['white', 'black'] },
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
console.log('-------');
console.log(budgetphones);

//filter all smartphones with brand 'samsung'

const samsungphones =smartphonelist.filter((phone)=> {return phone.brand ==='samsung'});
console.log(samsungphones);

//filter all smartphone with color 'black'

const colorphones=smartphonelist.filter((phone)=>{return phone.colors.includes('black')});

const brand=smartphonelist.map((phone)=>{return phone.brand});

console.log(Array.from(new Set(brand)));

const price=smartphonelist.map((phone)=>{return phone.price *0.9});
console.log(price);

//['samsung s23','iphone i15','oneplus nord','vivo v23','oppo reno','samsung s24']

const phonenames=smartphonelist.map ((phone)=>{return `${phone.brand} ${phone.model}`})
console.log(phonenames);