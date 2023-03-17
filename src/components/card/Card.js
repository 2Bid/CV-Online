import "./card.css";
import "./flip-transition.css";
import BackSide from "./side/back/BackSide";
import FrontSide from "./side/front/FrontSide";

function Card({flip}) {
  return (
    <div className="card__container">
      <FrontSide/>
      <BackSide/>
      
      <span className='cta' onClick={flip}></span>
    </div>
  );
}

export default Card;
