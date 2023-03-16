import "./card.css";
import "./flip-transition.css";
import BackSide from "./side/back/BackSide";
import FrontSide from "./side/front/FrontSide";

function Card({onClick}) {
  return (
    <div className="card__container" onClick={onClick}>
      <FrontSide/>
      <BackSide/>
    </div>
  );
}

export default Card;
