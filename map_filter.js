const nums=[1,5,8,9,2,7];

//find square of all elements in above array

const arr1 = nums.map((n)=>{return n **2});

console.log(arr1);


const prices=['Rs6753.34','Rs637.99','Rs777.39','Rs8932.4636'];

console.log(parseInt('Rs6753.34'.slice(2)));


const numPrices= prices.map((p)=>{return parseInt(p.slice(2))})

console.log(numPrices);

const prices2 =[23000,12000,5000,7800,100];
const budgetPrices = prices2.filter((p)=>{return p>2000 && p<10000});
console.log(budgetPrices);

const names =['faisal','taiba','sanu','umair','kaliya'];
const longnames=  names.filter((n)=>{return n.length>=5});


console.log(longnames);

const nums2 =[32,6754,2354,876,123,872];
//filter all even number

const evens =nums2.filter((a)=>{return a%2 === 0});
console.log(evens);


//const guestname=['Mr.Srivastav','Mrs. Sharma','Mr. singh','Miss.kour'];

const phonelist =[
    {brand:'samsung',model:'galaxy s',price:14999},
    {brand:'iphone',model:'15pro',price:114999},
    {brand:'vivo',model:'v 23',price:24999},
    {brand:'oneplus',model:'12R',price:8999},
    {brand:'samsung',model:'galaxy s',price:17999},
];


// find all phone where price is less than 20000
const budgetPhones = phonelist.filter((phone)=>{return phone.Price <20000});
console.log(budgetPhones);


const samsunhphones=phonelist.filter((phone)=>{return phone.brand==='samsung'});
console.log(samsunhphones);


const totalPrice= phonelist.reduce((acc,phone)=>{return acc+phone.price},0 );
console.log(totalPrice);