import React from 'react';
import Map from './Map.js';
import List from './List.js';
import './mainRight.scss';

function MainRight(){
    return (

        <div className="Main_Right">
            <div className="Main_Right_Map">
                <Map/>
            </div>
            <div className="Main_Right_List">
                <List/>
            </div>
        </div>

    );
};

export default MainRight;