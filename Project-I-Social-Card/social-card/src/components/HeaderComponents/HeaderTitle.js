import React from 'react';
import './Header.css';
import moment from 'moment';

const currentDate = moment().format("DD MMM");


function HeaderTitle() {
    return (
        <div className="header-title">
            <h4>Lambda School</h4>
            <p>@LambdaSchool {(currentDate)}</p>            
            
        </div>
    );
}

export default HeaderTitle;