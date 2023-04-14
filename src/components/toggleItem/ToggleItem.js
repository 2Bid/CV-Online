import React, { useLayoutEffect, useRef } from 'react'
import './toggleItem.css'

export default function ToggleItem({active, title, date,reward, list}) {

    const toggleContent = useRef(null)

    useLayoutEffect(()=>{
        if(active){
            const firstToggle = toggleContent.current
            firstToggle.style.height = `${firstToggle.scrollHeight}px`
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const toggling = (e) =>{
        const allToggle = document.querySelectorAll('.toggle__item')

        if(e.target.className === "toggle__content-container"){
            return
        }
        else{
            allToggle.forEach(toggle => {
                toggle.querySelector('.toggle__content').style.height = 0
                toggle.classList.remove('active')
            });

            e.target.querySelector('.toggle__content').style.height = `${e.target.querySelector('.toggle__content').scrollHeight}px`
            e.target.classList.add('active')
        }
    }

  return (
    <div className={`toggle__item ${active ? 'active' : ''}`} onClick={(e)=>toggling(e)}>
        <h4 className='toggle__title'>{title}</h4>
        <div className='toggle__content-container'>
            <div className='toggle__content' ref={toggleContent}>
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
    </div>
  )
}
