import Chai from "./Chai"

function App() {
  
  const name="Sakshi Apankar"
  return (
    //  <h1>Learning React with vite | Sakshi Apankar </h1>//you can return only one element


    <>
    <Chai/>
    <h1>hello {name}
      {/* {name} it is evaluated expression */}
    </h1>
    </>
    
  )
}

export default App
