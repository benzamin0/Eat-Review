import React from 'react';
import './main.scss';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

function Main() {

    return (
        <div className="Main">
            <div className="Main_left">
                <MainLeft/>
            </div>
            <div className="Main_right">
                <MainRight/>
            </div>
        </div>
    );
};

export default Main;