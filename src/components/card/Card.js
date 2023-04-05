import { useState } from "react";
import BackSide from "./side/back/BackSide";
import FrontSide from "./side/front/FrontSide";
import FlipArrow from "./flipArrow/FlipArrow";

import "./card.css";
import "./flipArrow/flip-transition.css";

function Card({flip, resetPos}) {

  const [isBackside, setIsBackside] = useState(false)

  function reverse(){
    flip()
    resetPos()
    setIsBackside(!isBackside)
  }

  return (
    <div className="card__container">
		<FrontSide/>
		<BackSide isBackside={isBackside}/>
		<FlipArrow reverse={reverse}/>
    </div>
  );
}

export default Card;
