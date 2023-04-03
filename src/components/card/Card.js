import { useState } from "react";
import BackSide from "./side/back/BackSide";
import FrontSide from "./side/front/FrontSide";
import FlipArrow from "./flipArrow/FlipArrow";

import "./card.css";
import "./flip-transition.css";

function Card({flip}) {

  const [isBackside, setIsBackside] = useState(false)

  function reverse(){
    flip()
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
