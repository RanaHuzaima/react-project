import { useState } from 'react';
import './index.css'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
function App() {
  const [password , setpassword] = useState("")
  const [length , setLength] = useState("8")
  const [number , setNumber] = useState("")
  const [char , setChar] = useState("")
  function gernator(){
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    let char = "!@#$%^&*()_+{}"
    let num = "0123456789"
  }

  return (
    <div  className="div">
    <input className='input' type="text" readOnly placeholder="Password"/>
    <div className="div-2">
    <input type="range" min="1" max="99" /><label>{length}</label>
    <input type="checkbox" /><label>Number</label>
    <input type="checkbox" /><label>characters</label>
</div>
    <button>Copy</button>
</div>
  )
}

export default App
