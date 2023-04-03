import React, { forwardRef } from 'react'
import './skillCircle.css'

export const SkillCircle = forwardRef(({name, percentage}, ref) => {

    let style
    console.log(ref.current)

    if(ref.current){
        const styleSheet = document.styleSheets[0];
        const keyframes= `
            @keyframes ${name} {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(${percentage * 1.8}deg);
                }
            }
        `
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        style = {
            animation: `${name} ease-in-out 2s`,
            transform: `rotate(${percentage * 1.8}deg)`
        }
    }

  return (
    <div className='circle-wrap'>
        <div className="circle">
            <div className="mask full" style={style}>
                <div className="fill" style={style}></div>
            </div>
        
            <div className="mask half">
                <div className="fill" style={style}></div>
            </div>
            
            <div className="inside-circle">
                {name}
            </div>
        </div>
    </div>
  )
})
