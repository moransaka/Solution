let array = ['q','w','e','r','t','y','u','i','o','p'];
let n = 4, m = 6;
for (let i = 0; i <= (n-1); i++){
    array.push(array[i]);
}
array.splice(0,n);
console.log(array);
