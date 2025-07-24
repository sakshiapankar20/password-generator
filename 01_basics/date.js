// let myDate=new Date(2024,5,30,22,48)
// console.log(myDate)
// console.log(myDate.getDay()+1)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(myDate.toLocaleTimeString())
// console.log(myDate.getFullYear())



// console.log(myDate.toLocaleTimeString("en-IN"))



// revision of date

let date=new Date(2025,7,24,8,24,50);
console.log(date);

let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(typeof mydate);
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getTime());
console.log(mydate.getMonth());

let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

console.log(mydate.toLocaleString());
console.log(mydate.toLocaleString('default',{
    weekday: "long"
}));




// in javascript months are start from 0 means january is 0th month