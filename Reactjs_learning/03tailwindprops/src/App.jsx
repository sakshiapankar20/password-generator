import Card from './components/Card'

import './App.css'

function App() {
//  let myObj={
//   userName:"Sakshi",
//   age:21
//  }

//  let newArr=[3,4,3];
  return (
    <>
      <h1 className='bg-blue-400 text-violet-900 font-bold p-4 rounded-xl mb-4'>Tailwind test</h1>

    {/* <Card channel="Sakshi Apankar" someObj={newArr}/> */}
    <Card username="Sakshi Apankar" />
    <Card btnTxt="Click here"/>
   
    </>
  )
}

export default App
