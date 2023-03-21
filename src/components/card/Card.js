import { useState } from "react";
import "./card.css";
import "./flip-transition.css";
import BackSide from "./side/back/BackSide";
import FrontSide from "./side/front/FrontSide";

function Card({flip}) {

  const [isBackside, setIsBackside] = useState(false)

  function reverse(){
    setIsBackside(!isBackside)
    flip()
  }

  return (
    <div className="card__container">
      <FrontSide/>
      <BackSide isBackside={isBackside}/>
  
      <span className='cta' onClick={reverse}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="35px"><path d="M20 12L4 12" stroke="#e3e5eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#e3e5eb " strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>  
      </span>
    </div>
  );
}

export default Card;
