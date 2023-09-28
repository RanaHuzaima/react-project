import { useState, useCallback, useEffect, useRef } from 'react';
import './index.css'
function App() {
  const [password , setPassword] = useState("")
  const [length , setLength] = useState(8)
  const [numAllow , setnumAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const gernator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) str += "0123456789";
    if(charAllow) str += "!@#$%^&*()_+{}";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numAllow,charAllow,setPassword]);
  useEffect(function on(){
    gernator();
  },[length,numAllow,charAllow,setPassword]);

  return (
    <div  className="div">
      <h1>Password Generator</h1>
    <input className='input' value={password} type="text" readOnly placeholder="Password"/>
    <div className="div-2">
    <input type="range" min="8" max="99" value={length} onChange={(e)=>{ setLength(e.target.value)}} /><label>{length}</label>
    <input type="checkbox" id="numInput" defaultChecked={numAllow} onChange={()=>{ setnumAllow((prev)=> !prev)}} /><label htmlFor="numInput">Number</label>
    <input type="checkbox" defaultChecked={charAllow} onChange={()=>{setCharAllow ((prev)=>!prev)}} /><label>characters</label>
</div>
    <button>Copy</button>
</div>
  )
}

export default App
