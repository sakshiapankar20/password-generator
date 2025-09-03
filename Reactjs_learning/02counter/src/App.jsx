import { useState } from 'react'
import './App.css'

function App() {

const [counter,setCounter]=useState(0)

//  let counter=0;

 const addValue=()=>{
  if(counter===20){
    alert("you already reach the upper limit!");
  }
  else{
    console.log("clicked",counter);
  // counter=counter+1;
  setCounter(counter+1)
  }
  
 }

 const removeValue=()=>{
  if (counter===0){
    alert("you cannot remove counter now!")
  }
  else{
  console.log("remove",counter);
  setCounter(counter-1);
  }
 }
  return (
    <>
     
     <h1>Chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br /><br />
     <button onClick={removeValue}>remove value</button>
   
    </>
  )
}

export default App
