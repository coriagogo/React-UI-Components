import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div className="card-container" target="_blank">
            <p></p>
            <a href="https://www.reactjs.org">
            <div className="card-cont">
                <CardBanner />
                <CardContent />
            </div>
            </a>
        </div>
    );
}

export default CardContainer;