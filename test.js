let array = [1,2,,null,5,6,7,5];
let checkArr = array.filter((e)=>e===null?console.log(` Element at index ${array.indexOf(e)} is empty `):e);
console.log(checkArr);


let {name,age,email}= array;
console.log({name,age,email})