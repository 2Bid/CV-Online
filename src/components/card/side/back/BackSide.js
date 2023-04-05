import React, { useEffect, useRef } from 'react'
import { SkillCircle } from './../../../skillCircle/SkillCircle'
import Carousel from '../../../Carousel/Carousel'

import './backSide.css'

export default function BackSide({isBackside}) {
  
  const backsideRef = useRef(false)

  useEffect(()=>{
    if(isBackside){
      backsideRef.current = true
    }
  },[isBackside])

  return (
    <div className='cardSide__back'>
      <div className='hardskills__section'>
        <h2>HardSkills</h2>
        <div className="hardskills__container">
			<SkillCircle name="HTML" percentage={95} ref={backsideRef}/>
			<SkillCircle name="CSS" percentage={80} ref={backsideRef}/>
			<SkillCircle name="JS" percentage={65} ref={backsideRef}/>
			<SkillCircle name="React" percentage={70} ref={backsideRef}/>
			<SkillCircle name="SEO" percentage={60} ref={backsideRef}/>
        </div>
      </div>

      <div className='projects__section'>
        <h2>Mes projets</h2>
        <div className="projects__container">
			{
				backsideRef.current ?
				<Carousel/>
				:
				<></>
			}
        </div>
      </div>
    </div>
  )
}
