import React, {useEffect, useRef } from 'react'
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

  const style = {
    zIndex: {
     zIndex : isBackside ? 1 : null
    }
  };

  return (
    <main className='cardSide__back' style={style.zIndex}>
      <section className='hardskills__section'>
        <h2>HardSkills</h2>
        <div className="hardskills__container">
          <SkillCircle name="HTML" percentage={95} ref={backsideRef}/>
          <SkillCircle name="CSS" percentage={85} ref={backsideRef}/>
          <SkillCircle name="JS" percentage={65} ref={backsideRef}/>
          <SkillCircle name="React" percentage={70} ref={backsideRef}/>
          <SkillCircle name="SEO" percentage={55} ref={backsideRef}/>
        </div>
      </section>

      <section className='projects__section'>
        <h2>Projets</h2>
        <div className="projects__container">
          {
            backsideRef.current ?
            <Carousel/>
            :
            <></>
          }
        </div>
      </section>
    </main>
  )
}
