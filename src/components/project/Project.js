import React from 'react'
import './project.css'

export default function Project({name, img, link, description}) {
  return (
    <a href={link} target='_blank' className='project' rel="noreferrer">
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
