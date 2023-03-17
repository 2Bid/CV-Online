import './flippable-card.css';
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';
import Card from '../card/Card';

function FlippableCard() {
    const [showFront, setShowFront] = useState(true);

    const flip = () => {
        setShowFront((v) => !v);
    }
    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <>
                <Card flip={flip}/>
                </>
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;