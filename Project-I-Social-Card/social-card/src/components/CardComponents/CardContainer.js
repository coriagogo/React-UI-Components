import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div className="card-container" >
            <p></p>
            <a href="https://www.reactjs.org" target="_blank">
            <div className="card-cont">
                <CardBanner />
                <CardContent />
            </div>
            </a>
        </div>
    );
}

export default CardContainer;