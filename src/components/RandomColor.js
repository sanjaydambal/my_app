import React from 'react'
import { useState, useEffect } from "react";

const RandomColor = () => {
    const [color, setColor] = useState('#000000')
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const handleTypeOfHexColor = () => {
        let hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
        let hexColor = '#'
        for(let i = 0; i < 6; i++){
hexColor += hex[Math.floor(Math.random()*hex.length)]
        }
        setColor(hexColor)
        setTypeOfColor('hex')
    }
    const handleTypeOfRgbColor = () => {
        setColor('rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')')
        setTypeOfColor('rgb')
    }
  return (
    <div style={{backgroundColor: color, width: '100vw', height: '100vh'}}>
      <button  onClick={()=> handleTypeOfHexColor()}>Create Hex Color</button>
      <button onClick = {()=>handleTypeOfRgbColor()}>Create RGB Color</button>
      <button onClick={ typeOfColor === 'hex' ? handleTypeOfHexColor : handleTypeOfRgbColor}>Create Random Color</button>
      <div style={{color: 'white', fontSize: '50px',display: 'flex', justifyContent: 'center', alignItems: 'center',
      flexDirection: 'column',gap: '10px'}}>
        <h3>{typeOfColor === 'rgb' ? "RGB Color : " : "Hex Color : " }</h3>
        <h1>{color}</h1>

      </div>
  

    </div>
  )
}

export default RandomColor
