import React, { useCallback, useState } from 'react'

export default function Hw1() {
    const [count,setCount] = useState<number>(0)
    const increment = useCallback(()=>{
        setCount((prevCount)=>prevCount+1)
    },[])
  return (
    <div>
        <h2>Hw1</h2>
        <button onClick={increment}>Increase</button>
        <p>Count:{count}</p>
    </div>
  )
}
