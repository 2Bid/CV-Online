import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Card from '../card/Card';

import './flippable-card.css';

function FlippableCard() {
    const [showFront, setShowFront] = useState(true);

    const flip = () => {
        setShowFront((v) => !v);
    }
    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={400}
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