const myArr=[4,5,3,8,9];
// console.log(myArr);

// const myHeros=["captain america","Iron man","Black widow"];
// console.log(myHeros[1]);

// const myarr2=new Array(3,5,677,7);
// console.log(myarr2[1]);

//Array methods

// myArr.push(34);//add element at last
// console.log(myArr);
// myArr.pop();//remove last element
// console.log(myArr);

// myArr.unshift(0);//add element at first
// console.log(myArr);
// myArr.shift();//remove the first element
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr=myArr.join();//join array and convert it into strings

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and spice

console.log("A ",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);//it changes the originak array

console.log(myn2);
console.log("C ",myArr);