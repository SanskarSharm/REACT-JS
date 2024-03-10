import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom Function APP</h1>
    </div>
  )
}

//lekin yeh nhi chlega kyunki iske
//parameter correct nhi hai

const reactElement = {
  type:'a',
  props:{
      href:'http://www.google.com',
      target:'_blank'
  },
  children:'Click me to visit Google'
}

const anotherElement = (
  <a href="http://www.google.com" target="_blank">Click me to visit Google</a>

)


ReactDOM.createRoot(document.getElementById('root')).render(
  //we can also call by methode MyApp()
  // <React.StrictMode>
  //   <App />
  //   <MyApp />
   
  // </React.StrictMode>,
  //yeh sidha object me convert hoga

  anotherElement
)
