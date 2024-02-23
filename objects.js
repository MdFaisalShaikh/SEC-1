const user={name:'faisal',email:'faisalshaikh498@gmail.com',password:'123abc'};
console.log(user.name);
console.log(user.email);
console.log(user['password']);

user.password='abc123';
console.log(user);

user.address='lucknow';
console.log(user);

delete user.address;
console.log(user);


console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone ={
    brand:'samsung',
    model:'s series',
    price : 12999,
    color:['black','red','blue'],
};

console.log(smartphone.color[1]);

smartphone.color[2]='white';
console.log(smartphone.color);

smartphone.color.splice(-1,1,'gray');
console.log(smartphone.color);

smartphone.color.push('yellow');
console.log(smartphone.color);


const myphone={
    brand:'iphone',
    model:'15promax',
    variant:{
        '8gb':57000,
        '12gb' : 67000
    }
};

console.log(myphone.variant['12gb']);

const phonelist =[
    {brand:'samsung',model:'galaxy s',price:14999},
    {brand:'iphone',model:'15pro',price:114999},
    {brand:'vivo',model:'v 23',price:24999},
    {brand:'oneplus',model:'12R',price:34999},
];
console.log(phonelist.length);
console.log(phonelist[2].price);

phonelist[phonelist.length-1].model='12pro';
console.log(phonelist);

let totalPrice =0;
for(let phone of phonelist){
    //console.log(phone.price);
    totalPrice+=phone.price;
}
console.log(totalPrice);

for(let phone of phonelist){
let model=[];
model.push(model);
}
console.log(phonelist);
