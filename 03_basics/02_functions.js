// function calculateCartPrice(...num1) //here ...is the rest operator convert the values into array
// {
//     return num1;
// }

// console.log(calculateCartPrice(200,30,45));


// function calculateCartPrice(val1, val2,...num1){
//     return num1;

// }

// // here val1=34,val2=55 and num1=[20,22]
// console.log(calculateCartPrice(34,55,20,22));


const user={
    username: "sakshi",
    age:22
}

function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);
}

handleObj(user);
handleObj({username:"kabeer", age:24})

const arr=[200,333,55,959];
function returnSecondValue(myarr){
    return myarr[1];
}

console.log(returnSecondValue(arr));
console.log(returnSecondValue([2,3,5,6]));

