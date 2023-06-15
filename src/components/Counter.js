import React from "react"
import  { useState } from "react"

const Counter = () => {
    
const [value, setValue] = useState(0)
function increment(){
 setValue(value+1)
}

function decrement(){
 setValue(value-1)
}
  return (
    <div>  
         <button onClick={decrement}>-</button>
    <span>{value}</span>
    <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter