import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrep justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=> setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Purple"}}>Purple</button>
          <button onClick={()=> setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Olive"}}>Olive</button>
          <button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Orange"}}>Orange</button>
          <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Pink"}}>Pink</button>
          <button onClick={()=> setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Brown"}}>Brown</button>
          <button onClick={()=> setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Black"}}>Black</button>
          <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Yellow"}}>Yellow</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
//onClick={()=> setColor("red")} is a function that changes the color of the background to red when the button is clicked.
//onClick={setColor} will change the color of the background to green when the button is clicked.
//but onClick hmesha function dimand krta h jo vo return kr ske
