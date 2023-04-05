import React from 'react'
import './socialLink.css'

export default function SocialLink({svg, name, link}) {
  return (
    <div className='social__item'>
        <img src={svg} alt={name}/>
        <a className='social__link' href={link} target='_blank' rel="noreferrer">
            {name}
        </a>
    </div>
  )
}
