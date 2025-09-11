import React, {useEffect}  from "react";



function Navbar({color}){
  
useEffect(()=>{
        alert("i will run on every render");
    });

    useEffect(()=>{
        alert("i will run on only first render");
    },[]);




    useEffect(()=>{
        alert("I will run when count is change");
        
    },[color]);
   

    return(
        <>
        <div>
            I am a {color} navbar
        </div>
        </>
    )
}

export default Navbar;