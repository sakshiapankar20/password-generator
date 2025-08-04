//control flow 

//if

// comparison opertors-> <,>,<=,>=,==,!=,===,!==

// atrict equality and inequality operator===,!==->checks value as well as datatypes

// let balance=1000;

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


// const userLoggedIn=true;
// const debitCard=true;
// const loggedInFromGoogl=false;
// const loggedInFromEmail=true;



// if(userLoggedIn==true && debitCard==true){
//     console.log("allow to buy course")
// }


// if(loggedInFromEmail==true || loggedInFromGoogl==true){
//     console.log("user logged In");
// }




// switch case

// const month=7;

// switch (month) {
//     case 1:console.log("january")
        
//         break;
//     case 2:console.log("February")
        
//         break;
//     case 3:console.log("March")
        
//         break;
//     case 4:console.log("april")
        
//         break;
//     case 5:console.log("may")
        
//         break;
//     case 6:console.log("june")
        
//         break;
//     case 7:console.log("july");
        
//         // break;
//     case 8:console.log("august");
        
//         // break;

//     default:console.log("month after august");
//         break;
// }



// const userEmail="abc@gmail.com";->console.log("got user email");
// const userEmail="";->console.log("Don't have user email");
// const userEmail=" ";-> console.log("got user email");
    
// const userEmail=[];-> console.log("got user email");



// if(userEmail){
//     console.log("got user email");
    
// }
// else{
//     console.log("Don't have user email");
    
// }


// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,Nan

//truthy values
// "0","false"," ",[],{},function(){}


// if array is empty
// const userEmail=[];

// if(userEmail.length===0){
//     console.log("Array is empty");
    
// }

// // if object is empty how to get to know
// const emptyObj={};
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
    
// }


// useful comparisons
// false==0;
// false=="";
// 0=="";

// // console.log(false==0,false=="",""==0);
// console.table([false==0,false=="",""==0])


// nullish coalescing operator (??): null undefined

let val1;
// val1=5 ?? 10;
// console.log(val1);//5

// val1=null ?? 10;
// console.log(val1);//10

// val1=undefined ?? 15;
// console.log(val1);//15


// val1=null??10??20;
// console.log(val1);


//ternary operator

// condition ? true : false

const iceTeaPrice=100;

iceTeaPrice<=70 ? console.log("we can buy ice-tea")
 : console.log("we can't buy ice-tea")
 ;

// const result= iceTeaPrice<=70 ? "we can buy ice-tea" : "we can't buy ice-tea";

// console.log(result)