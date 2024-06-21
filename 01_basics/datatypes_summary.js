// datatypes
// primitive datatypes and non-primitive datatypes

// #primitive

// 7 types:String,Number,Boolean,null(it does not mean 0 it means empty),undefined(variable and memory space is declare but what value will assign is not defined),Symbol,BigInt(to stor bigger values )
const score=100
const scoreValue=34.3
const isLoggedIn=true
const outSideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber=3943480n
console.log(typeof bigNumber)

// **JavaScript is a dynamically typed language. This means that types are associated with values rather than variables, and the type of a variable is determined at runtime based on the value it holds. You don't need to explicitly declare the type of a variable when you define it, and you can change the type of a variable by assigning it a value of a different type.**

//reference type or non primitive datatypes

// arrays,objects,functions

// arrays
const heros=["shaktiman","nagrag","doga"]

// object
let myObj={
    name:"sakshi",
    age:22
}

// function
function myFunction(){
    console.log("hello world");
}

console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof myObj);