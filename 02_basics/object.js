//singleton--when we create object using constructor

// Object.create



//object literals--it is not singletone multiple instances are created\

const sym1=Symbol("key1");
console.log(typeof sym1)

const JsUser={
    "name": "Sakshi",
    "full name": "sakshi apankar",
    age: 21,
    [sym1]:"mykey1",
    email: "sakshi@gmail.com",
    location: "Mumbai",
    isLoggedIn: false,
    loggedInDays:["monday","tuesday"]




}

console.log(JsUser);

// accessing objects
// console.log(JsUser);
// console.log(JsUser[sym1]);

// console.log(typeof JsUser[sym1]);
// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser.email);
// console.log(typeof JsUser["loggedInDays"])

// JsUser.email="sakshichatgpt.com";
// console.log(JsUser);

// Object.freeze(JsUser);
// JsUser.email="sakshiabc.com";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}
JsUser.greetingtwo=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())

console.log(JsUser);






