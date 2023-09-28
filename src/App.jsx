import { useState, useCallback, useEffect, useRef } from 'react';
import './index.css'
function App() {
  //Declare State
  const [password , setPassword] = useState("")
  const [length , setLength] = useState(8)
  const [numAllow , setnumAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  // UseRef Hook
  const passwordRef = useRef(null)
  // Make PassGernator function
  const passGernator = useCallback(()=>{
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
  // Make Copy Function
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  },[password])
  // UseEffect Hook for call
  useEffect(()=>{
    passGernator();
  },[length,numAllow,charAllow,passGernator]);
  return (
    <div  className="div">
      <h1>Password Generator App</h1>
    <input className='input' value={password} type="text" readOnly ref={passwordRef} placeholder="Password"/>
    <div className="div-2">
    <input type="range" min="8" max="99" value={length} onChange={(e)=>{ setLength(e.target.value)}} /><label>{length}</label>
    <input type="checkbox" id="numInput" defaultChecked={numAllow} onChange={()=>{ setnumAllow((prev)=> !prev)}} /><label htmlFor="numInput">Number</label>
    <input type="checkbox" id="charInput" defaultChecked={charAllow} onChange={()=>{setCharAllow ((prev)=>!prev)}} /><label htmlFor='charInput'>characters</label>
</div>
    <button onClick={copyPassword}>Copy</button>
</div>
  )
}

export default App
