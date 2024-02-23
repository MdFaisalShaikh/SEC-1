const num =[34,28,100,29,35,77,38];

//wap to get sum of all elements in array

for(let i=0; i<nums.length;i++){
    console.log(num[i]);
}


let sum=0;
for(let i of nums){
    sum+=i;

}
console.log(sum);


let sum2 =0;
nums.forEach((a)=>{sum2+=a;});
console.log(sum2);

// get sum of elements on even index

let sum3 =0;
nums.forEach((a,i)=>{
    if(i%2===0){
        sum3 +=a;

    }
});
console.log(sum3);


for(let i of nums){
    console.log(i**3);
}

//wap to add all even elements in array

let even=[];
let i=0;
while(i<numbers.length){
    if (numbers[i%2==0])
    even.push(numbers[i]);
i++;
}

