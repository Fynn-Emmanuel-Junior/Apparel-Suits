import React, { useState } from 'react';
import Header from '../../Components/Header';
import Dropdown from '../../Components/Dropdown';
import Products from '../../Constants/SuitImages';
import Counter from '../../Components/Counter';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';


function SuitItem({productid,setProduct}) {
    const item = Products.filter((product) => product.id === productid)

    const [selected, setSelected] = useState("")

    const handleClick = () => {
        setProduct(item[0])
        console.log("hello")
    }
    
    
    return (
        <div>
            <Header />
            <div>
                <div style={{width: "80%", marginLeft: "20%",display: "flex",justifyContent: "space-between", marginTop: "5%"}}>
                    <div>
                        <img src={item[0].Image} alt=""/>
                    </div>
                    <div style={{width: "60%"}}>
                        <div style={{width: "100%"}}>
                            <div style={{width: "70%"}}>
                                <p style={{fontSize: "22px"}}>{item[0].title}</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", width: "20%", fontSize: "20px", marginTop: "1%"}}>
                                <div style={{color: "red"}}>{item[0].price}</div>
                                <div><del>{item[0].price1}</del></div>
                            </div>
                            <div style={{margin: "10px 0"}}>
                                <Dropdown selected={selected} setSelected={setSelected}/>
                            </div>
                            <div style={{marginBottom: "3%"}}>
                                <Counter />
                            </div>
                            <div style={{width: "40%", marginBottom: "20px", position: "relative"}}>
                             <Link to='/checkout' className='button' style={{textDecoration: "none"}} onClick={handleClick}>
                                ADD TO CART
                                
                             </Link>   
                            </div>
                        </div>
                        <div style={{marginTop: "15%"}}>
                            <ul>
                                <li>Regular Fit</li>
                                <li>Tone on Tone Windowpane</li>
                                <li>2 Piece includes Blazer and Pants</li>
                                <li>Double Breasted, 3x2 Buttons</li>
                                <li>Side Vents</li>
                                <li>
                                    Flat Front Pants, Un-Hemmed Pants Bottoms for Alteration Ease
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>                
        </div>
    );
}

export default SuitItem;