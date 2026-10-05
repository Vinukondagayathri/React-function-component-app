import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


  function App() {
 const Name="Gayathri";
 const Sum = () => {
 return (
 <>
 <div>Sum</div>
 <div><h1>Arrow Function Component Sum</h1></div>
 <div>
 Sum is: {100 + 200}
 </div>
 </>
 )
 
}
 return (
 <>
 <div>
 <h1>This is the React function component App example</h1>
 </div>
 <div >
 <h1>
 Myself </h1>
 <h1>{Name} </h1>
 </div>
 
 </>
 )
}
export default App