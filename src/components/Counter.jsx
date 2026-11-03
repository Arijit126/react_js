import { useState } from "react"

const Counter = () => {
    const increament=()=>{setCount(count+1)}
    const decreament=()=>{setCount(count-1)}
    const reset=()=>{setCount(0)}
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increament}>increament</button>
        <button onClick={reset}>resest</button>
        <button onClick={decreament}>decreament</button>
    </div>
  )
}

export default Counter