import React, { ChangeEvent, useCallback, useState } from 'react'

export default function Hw3() {
    const [color,setColor] =useState<string>("red")
    const handleChangeColor = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setColor(e.target.value)
    },[])
  return (
    <div>   
        <h2>Hw3</h2>
        <input 
            type="text"
            value={color}
            onChange={handleChangeColor} />
        <p>chon mau : <span style={{color}}>{color}</span></p>
    </div>
  )
}
