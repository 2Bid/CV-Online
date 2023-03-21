import React from 'react'
import SkillCircle from './../../../skillCircle/SkillCircle'
import Carousel from '../../../Carousel/Carousel'

import './backSide.css'

export default function BackSide({isBackside}) {
  return (
    <div className='cardSide__back'>
      <div className='hardskills__section'>
        <h2>HardSkills</h2>
        <div className="hardskills__container">
          <SkillCircle name="HTML" percentage={90} isBackside={isBackside}/>
          <SkillCircle name="CSS" percentage={80} isBackside={isBackside}/>
          <SkillCircle name="JS" percentage={65} isBackside={isBackside}/>
          <SkillCircle name="React" percentage={75} isBackside={isBackside}/>
          <SkillCircle name="SEO" percentage={70} isBackside={isBackside}/>
        </div>
      </div>
      <div className='projects__section'>
        <h2>Mes projets</h2>
        <div className="projects__container">
          <Carousel />
        </div>
      </div>
    </div>
  )
}
