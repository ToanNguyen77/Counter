import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setcount] = useState(0)   
    let color = (count > 0) ? "green" : (count < 0 ) ? "red" : "black";            
    
    const decrement = () => setcount(count - 1);
  return (
    <div className="container" >
  <h1>Counter</h1>
  <span style={{color}}id="value">{count}</span>
  <div className="btn-group">
    <button onClick = {decrement} className="btn btn-decrease">DECREASE</button>
    <button onClick = {() => {setcount(0)}} className="btn btn-reset">RESET</button>
    <button onClick = {() => {setcount(count + 1)}} className="btn btn-increase">INCREASE</button>
  </div>
</div>
  )
}

export default App