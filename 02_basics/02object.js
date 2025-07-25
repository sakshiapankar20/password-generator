// const instaUser=new Object();
// console.log(instaUser)

// const instaUser={};
// console.log(instaUser)

// instaUser.name="sakshi";
// instaUser.email="abc@gmail.com";

// instaUser.id="123abc";

// console.log(instaUser);


const snapUser={
    email: "some@gmailcom",
    fullname:
    {
        username:{
           fistname:"sakshi",
           lastname:"apankar"
        }
    }
}

// console.log(snapUser.fullname.username.fistname);


const obj1 = {
    1: "a", 2: "b"
};

const obj2={3:"a" ,4:"b"};

// const obj3={obj1,obj2};

// console.log(obj3)

// const obj4=Object.assign({},obj1,obj2);

// const obj4={...obj1,...obj2}//spread operator
// console.log(obj4)


const users=[
    {
        id: 1,
        email:"a@gmail.com"
    },
    {
        id: 2,
        email:"b@gmail.com"
    },
    {
        id: 3,
        email:"c@gmail.com"
    }

];

// console.log(users[1].email);

// console.log(Object.keys(snapUser))
// console.log(Object.values(snapUser))
// console.log(Object.entries(snapUser))

console.log(snapUser.hasOwnProperty('fullname'));
