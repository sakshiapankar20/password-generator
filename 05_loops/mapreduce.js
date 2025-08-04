const coding = ["js", "ruby", "java", "python", "cpp"];

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item

// });

// // foreach not returns items like this way

// console.log(values);

// const myNums=[1,2,3,4,5,6,7,8,9];

// const newNums=myNums.filter((num) => num>5);
//this will work correctly because here we don't use the curly braces that is scope so that return key word is not use

// const newNums=myNums.filter((num) => {
//     num>5
// });
// ---this gives empty array[]---because you have not use return keyword

// const newNums=myNums.filter((num) => {
//     return num>5
// });
// console.log(newNums);

// return something using foreach;

// const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums=[];

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

//map

// const nums=[1,2,3,4,5,6];
// const newNums=nums.map((item)=>{
//     return item*10;
// })
// console.log(newNums)

//reduce

// const myarr=[1,2,3];
// const totalPrice=myarr.reduce((acc,curr)=>{return acc+curr},0);
// console.log(totalPrice);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python",
    price: 2300,
  },

  {
    itemName: "java",
    price: 3999,
  }
];
const priceToPay=shoppingCart.reduce((acc,item)=> acc+ item.price,0);

console.log(priceToPay);


