import React from 'react';
import Header from '../../Components/Header';
import Products from '../../Constants/SuitImages';
import { Link } from 'react-router-dom';


function SuitItem({productid}) {
    const item = Products.filter((product) => product.id === productid)
    console.log(item)
    console.log(item.id)
    return (
        <div>
            <Header />
            <div>
                <div>
                    <img src={item[0].Image} alt=""/>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuitItem;