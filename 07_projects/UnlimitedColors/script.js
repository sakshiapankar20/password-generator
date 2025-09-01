// generate a random color 

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#"

    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }

    return color;
};

// console.log(randomColor());


let intervalId;
const startChangingColor=function(){
    
   if(!intervalId){
    intervalId= setInterval(changeBGColor,1000);
    
   }


   
    function changeBGColor(){
         document.body.style.backgroundColor=randomColor();
        //  console.log(intervalId);
         
    }
   

}

const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;
}

document.getElementById("start").addEventListener("click",startChangingColor);

document.getElementById("stop").addEventListener("click",stopChangingColor);


