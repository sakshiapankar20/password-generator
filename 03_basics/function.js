function send(){
    console.log("the post has been share");
}

// send();
// send();
// send();
// send();

function addTwoNum(num1, num2)//parameters
{
    return num1+num2;

}

const addTwoNumbers=addTwoNum(3,4);//arguments;
// console.log(addTwoNumbers);

// function loginUserMessage(username){
//     if(username===undefined || username===""){
//         return "please enter the username";
//     }
//     else{
//         return `${username} just logged in`;
//     }
    
// }

// similar
function loginUserMessage(username="user"){
    if(!username){
        return "please enter the username";
    }
    else{
        return `${username} just logged in`;
    }
    
}


const result=loginUserMessage("Sakshi");
console.log(result);

console.log(loginUserMessage(""));
console.log(loginUserMessage());