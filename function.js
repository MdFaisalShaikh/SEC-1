const getAvg = function(m1,m2,m3){
    const avg =(m1+m2+m3)/3;
    // console.log(avg);
    return avg;
}
const result=getAvg(34,56,78);
console.log(result);

const getFact=(n)=>{
    let f=1;
    for(let i=1; i<=n; i++){
        f= f*i;
    }
    // console.log(f);
    return f;


}
getFact(5);

const myRes = getFact(10)/getFact(5);
console.log(myRes);

