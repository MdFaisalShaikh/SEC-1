const nums = [23, 82, 183, 9, 24];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] ** 2);
}

console.log('-------------');


for (let a of nums) {
    console.log(a ** 2);

}
console.log('----------');

nums.forEach((n) => {console.log(n); });

// add new element

let ans=[];
let i=0;
while(i<nums.length){
    if (nums[i%2==0])
    even.push(nums[i]);
i++;
}