import React from 'react';
import Header from '../../Components/Header';
import Dropdown from '../../Components/Dropdown';
import Products from '../../Constants/SuitImages';
import { Link } from 'react-router-dom';


function SuitItem({productid}) {
    const item = Products.filter((product) => product.id === productid)
    console.log(item)
    
    return (
        <div>
            <Header />
            <div>
                <div style={{width: "80%", marginLeft: "20%",display: "flex",justifyContent: "space-between", border: "1px solid red", marginTop: "5%"}}>
                    <div style={{border: "1px solid blue"}}>
                        <img src={item[0].Image} alt=""/>
                    </div>
                    <div style={{border: "1px solid darkblue", width: "60%"}}>
                        <div style={{width: "100%"}}>
                            <div style={{width: "65%"}}>
                                <p style={{fontSize: "25px"}}>{item[0].title}</p>
                            </div>
                            <div>
                                {item[0].price}
                                <del>{item[0].price1}</del>
                            </div>
                            <div>
                                <Dropdown />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SuitItem;