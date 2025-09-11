import React from "react";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client"
import App from "./App"
import Hooks from "./Hooks";
import Navbar from "./components/Navbar";
import HookUseRef from "./components/HookUseRef";

// const reactEle=React.createElement(
//   'a',
//   {
//     href:'https://google.com',
//     target:'_blank'
//   },
//   'click to visit google'
// )

// function Myapp(){
//   return(
//     <div>
//       <h3>hello this is day 3 of learning reactjs</h3>
//     </div>
//   )
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>

    
    {/* {reactEle} */}
    {/* <App/>
    <Navbar color={"navy"+"blue"}/>

    <Hooks/> */}
    {/* {Myapp()}  */}
    
    {/* this is the way to declare functions inside strict mode */}


    <HookUseRef/>
  </StrictMode>

)
