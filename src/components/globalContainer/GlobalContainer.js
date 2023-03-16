import React, { useState } from 'react'
import FlippableCard from '../flippableCard/FlippableCard'

import "./globalContainer.css"

export default function GlobalContainer() {

  const [xPosition, setXPosition] = useState()
  const [yPosition, setYPosition] = useState()

  // calculer l'angle par rapport a la distance 
  const [angleX, setAngleX] = useState(25)
  const [angleY, setAngleY] = useState(25)

  const handleMouseMove = (e) => {
    const midCardX = e.target.clientWidth
    const midCardY = e.target.clientHeight

    setXPosition(e.clientX)
    setYPosition(e.clientY)

    setAngleX((xPosition - midCardX) / 50) 
    setAngleY((yPosition - midCardY) / 25) 
  }

  const handleMouseOut = () => {
    setAngleX(0)
    setAngleY(0)
  }

  return (
    <div 
      className='globalContainer' 
      onMouseMove={(e)=>{handleMouseMove(e)}}
      onMouseOut={()=>handleMouseOut()}
    >
      <div
        className='container'
        style={{
          transform:`rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        }}
      >
        <FlippableCard/>
      </div>
    </div>
  )
}
