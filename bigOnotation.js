// // to culculate the function that culculate the sum of number and add
function addNumber(number){
let sum = 0;
for(let i = 1; i < number; i++){
    sum += i;
}
return sum;
}
console.log(addNumber(10));
// // or we can also use this method 
function addNumber(number){
    return number * (number +1)/2;

}
console.log(addNumber(10));
// // checking time complexity of our function 
const t1 = performance.now();
addNumber(1000000000);
const t2 = performance.now();
console.log(`time coplesity ${(t2 - t1)/1000} seconses`);
//loop
function number(n){
console.log("gooo up");
for(let i = 0; i < n; i++){
    console.log(i);
    for(let j= 0; j<=i; j--){
        console.log("goes down");
        console.log(j);
    }
}
}
number(10);