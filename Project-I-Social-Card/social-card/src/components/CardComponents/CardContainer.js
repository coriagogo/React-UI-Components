import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
    return (
        <div className="card-container">
            <p></p>
            <div ClassName="card-cont">
                <CardBanner />
                <CardContent />
            </div>
        </div>
    );
}

export default CardContainer;