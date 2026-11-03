import { useState } from "react"

const ToogleBtn = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <button onClick={()=>setToggle(!toggle)}>
        {!toggle?'Turn off':'Turn on'}
    </button>
  )
}

export default ToogleBtn