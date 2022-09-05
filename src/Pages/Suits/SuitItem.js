import React from 'react';
import Header from '../../Components/Header';
import image from '../../assets/Suits/suit1.webp'
import { Link } from 'react-router-dom';


function SuitItem() {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default SuitItem;