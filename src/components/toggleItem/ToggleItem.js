import React from 'react'
import './toggleItem.css'

export default function ToggleItem({title, date,reward, list}) {

    const toggling = (e) =>{
        const allToggle = document.querySelectorAll('.toggle__content')

        allToggle.forEach(toggle => {
            toggle.style.height = 0
            toggle.classList.remove('active')
        });

        e.target.lastChild.style.height = `${e.target.lastChild.scrollHeight}px`
        e.target.lastChild.classList.add('active')
    }

  return (
        <div className='toggle__item' onClick={(e)=>toggling(e)}>
            <h4 className='toggle__title'>{title}</h4>
            <div className='toggle__content'>
                <span className='toggle__date'>{date}</span>
                <span className='toggle__date'>{reward}</span>
                <ul className='toggle__list'>
                    {
                        list.map((item, id)=>{
                            return <li className='toggle__list-item' key={id}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
  )
}
