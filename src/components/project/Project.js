import React, { useEffect, useState } from 'react'
import './project.css'

export default function Project({name, img, link, description}) {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },300)
  },[])

  return (
    <a href={link} target='_blank' className={`project ${loading ? '' : 'visible'}`} rel="noreferrer">
      <div className='project__img-container'>
          <img className='project__img' src={img} alt={name}/>
      </div>
      <div className='project__content'>
        <h4 className='project__title'>{name}</h4>
        {description}
      </div>
    </a>
  )
}
