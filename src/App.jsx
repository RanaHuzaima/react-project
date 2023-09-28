import { useState, useCallback, useEffect, useRef } from "react";
import {AiFillCopy,AiOutlineReload}  from "react-icons/ai";
import "./index.css";
function App() {
  //Declare State
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [lowcase, setLowcase] = useState(false);
  const [uppcase, setUppcase] = useState(false);
  // UseRef Hook
  const passwordRef = useRef(null);
  // Make PassGernator function
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if(uppcase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowcase) str += "abcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+{}";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword,lowcase,uppcase]);
  // Make Copy Function
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  // UseEffect Hook for call
  useEffect(() => {
    passGenerator();
  }, [length, numAllow, charAllow, passGenerator,lowcase,uppcase]);
  return (
    <div className="div">
      <h1>Password Generator App</h1>
      <input
        className="input"
        value={password?password:"Password"}
        type="text"
        readOnly
        ref={passwordRef}
        placeholder="Password"
      /><i className="copy_logo" onClick={copyPassword} ><AiFillCopy/></i>
       <i className="reload_logo" onClick={passGenerator} ><AiOutlineReload/></i>
      <div className="div-2">
        <input
          type="range"
          min="8"
          max="99"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>{length}</label>
        <input
          type="checkbox"
          id="numInput"
          defaultChecked={numAllow}
          onChange={() => {
            setnumAllow((prev) => !prev);
          }}
        />
        <label htmlFor="numInput">Number</label>
        <input
          type="checkbox"
          id="charInput"
          defaultChecked={charAllow}
          onChange={() => {
            setCharAllow((prev) => !prev);
          }}
        />
        <label htmlFor="charInput">characters</label>
        <input 
        type="checkbox" 
        id="lowcase" 
        defaultChecked={lowcase}
        onChange={()=>{
          setLowcase((prev) => !prev)
        }}
        />
        <label htmlFor="lowcase">Lowercase</label>
        <input 
        type="checkbox"
        id="uppcase"
        defaultChecked={uppcase}
        onChange={()=>{setUppcase((prev) => !prev)}}
         />
         <label htmlFor="uppcase">Uppercase</label>
      </div>
      <button onClick={copyPassword}>Copy</button>
    </div>
  );
}

export default App;
