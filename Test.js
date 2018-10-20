let array = [0,1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1];
let n = 10, m = 19;
let lengthFirst = n + 1;
let lengthSecond = m - n;
console.log(lengthFirst, lengthSecond);
console.log(array);
for (let i = 0; i <= n; i++){
    array[m + i] = array[i];
}