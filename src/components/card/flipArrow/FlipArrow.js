import React from 'react'
import './flipArrow.css'

export default function FlipArrow({reverse}) {
  return (
    <div className="flipArrow" onClick={reverse}>
        <svg  className="flipArrow__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40px">            
            <path d="M20 12L4 12" stroke="#e3e5eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <animate attributeName="stroke" values="#e3e5eb;#e3e5eb;#F5A11B;#e3e5eb;#e3e5eb;#e3e5eb" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#e3e5eb " strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <animate attributeName="stroke" values="#e3e5eb;#e3e5eb;#e3e5eb;#F5A11B;#e3e5eb;#e3e5eb" dur="3s" repeatCount="indefinite" />
            </path>
        </svg>
    </div>
  )
}
