import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  //hm usme object bhi pass kr skte hain
  let myObj = {
    username: "Sanskar",
    age: 21
  }
  //hm array bhi pass kr skte hain
  let myArr = [1, 2, 3, 4, 5]




  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

     <Card username="SanskarSharma " someObject={myObj} someArray={myArr} btnText="Hello Ji"  />
     <Card username="Somesh" btnText="click Me" />

   
    </>
  )
}

export default App
