let score="false";

console.log(typeof(score));

// string to number
// number in string "33"===33;
// "35jal"-> NaN
// empty string->0
let valueInNumber=Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// string to boolean
// empty string--false
//string==true
let valueInBool=Boolean(score);
console.log(typeof(valueInBool));
console.log(valueInBool);

let con=null;


//null to number ->null->0;
let num=Number(con);
console.table([num,typeof(num)]);


//undefined to number->undefined->NaN
let num1=undefined;

let num2=Number(num1);
console.table([num2,typeof(num2)]);

//boolean to Number
// true->1
// false->0
let no1=false;
let no2=Number(no1);
console.table([no2,typeof(no2)]);

// number to boolean
//0->false
// 1->true
let a=0;
let b=Boolean(a);
console.table([b,typeof(b)]);

///everything is easily converted into string like 33->"33" true->"true" undefined->"undefined" null->"null";
//number to String
// number->String;
let sum=0;
let sumS=String(sum);
console.table([sumS, typeof(sumS)]);


// undefined to String
let un=undefined;
let unS=String(un);
console.table([unS, typeof(unS)]);

//null to string
let nul=null;
let nulS=String(nul);
console.table([nulS, typeof(nulS)]);

//boolean to string

let bol=true;
let bolS=String(bol);
console.table([bolS,typeof(bolS)]);


console.table([3+1,3+"1",2**2,2**3,3+""])
