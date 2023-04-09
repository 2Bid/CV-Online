import React, { useLayoutEffect, useRef, useState } from 'react'
import FlippableCard from '../flippableCard/FlippableCard'

import "./globalContainer.css"

export default function GlobalContainer() {

  const ref = useRef(null)

  const [widthCard, setWidthCard] = useState(0);
  const [heightCard, setHeightCard] = useState(0);

  useLayoutEffect(()=>{
    setWidthCard(ref.current.offsetWidth);
    setHeightCard(ref.current.offsetHeight);
  }, [])

  const [xPosition, setXPosition] = useState()
  const [yPosition, setYPosition] = useState()

  const [angleX, setAngleX] = useState(0)
  const [angleY, setAngleY] = useState(0)

  const handleMouseMove = (e) => {
    if (navigator.userAgent.match(/Android/i) || 
      navigator.userAgent.match(/webOS/i) || 
      navigator.userAgent.match(/iPhone/i) || 
      navigator.userAgent.match(/iPad/i) || 
      navigator.userAgent.match(/iPod/i) || 
      navigator.userAgent.match(/BlackBerry/i) || 
      navigator.userAgent.match(/Windows Phone/i)){
        return
    }
    else{
      setXPosition(e.clientX)
      setYPosition(e.clientY)

      const midCardX = widthCard / 1.35
      const midCardY = heightCard / 1.35

      setAngleX((yPosition - midCardY) / 45) 
      setAngleY(-(xPosition - midCardX) / 90)
    } 
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
			ref={ref}
			style={{
			transform:`rotateX(${angleX}deg) rotateY(${angleY}deg)`
			}}
		>
			<FlippableCard resetPos={handleMouseOut}/>
		</div>
    </div>
  )
}
