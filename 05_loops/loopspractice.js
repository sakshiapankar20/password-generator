// for(let i=1; i<5; i++){
//     console.log(i);
// }


// program to add first n natural numbers

// const { stdin, stdout } = require("process");
// const readline=require("readline");

// const r=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// r.question("enter value of n: ", function(n){

//     n=parseInt(n);

//     let sum=(n*(n+1))/2;
//     console.log(sum);

//     r.close();
// });


// for in loop for obj,arrays

// let obj={
//     sakshi:98,
//     kabeer:95

// }

// for(let i in obj){
//     console.log(`the value of ${i} is ${obj[i]}`)
// }

// for of loops

let arr=["sakshi","kabeer"];
for(let i of arr){
    console.log(i);
}