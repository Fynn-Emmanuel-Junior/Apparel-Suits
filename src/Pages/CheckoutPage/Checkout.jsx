import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Products from '../../Constants/SuitImages';
import Counter from '../../Components/Counter';

const Checkout = ({productid,size,quantity,setSize,count}) => {

    const product = Products.find((product) => product.id === productid);
    
    return (
        <>
            <Header />
            <div style={{width: "100%",marginTop: "4%"}}>
                <div style={{width: "30%", margin: "auto",textAlign: "center"}}>
                    <h3>Cart</h3>
                    <p style={{marginTop: "20px"}}>You are eligible for free shipping!</p>
                </div>
            </div>
            <div style={{width: "80%",margin: "auto",display: "flex",justifyContent: "space-between",alignItems: "center",marginBottom: "10px",marginTop: "50px",borderBottom: "1px solid #000"}}>
                <div style={{width: "45%"}}>
                    Product
                </div>
                <div style={{width: "40%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Total
                    </div>
                </div>
            </div>
            <div>
                <div style={{width: "80%",margin: "auto",display: "flex",justifyContent: "space-between",alignItems: "center",marginBottom: "10px",marginTop: "50px"}}>
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between",alignItems: "center" }}>
                        <div>
                            <img src={product.Image} alt={"Product"} style={{width: "20%"}} />
                        </div>
                        <div style={{fontSize: "15px"}}>
                            {product.title} {"-"} {quantity}
                        </div>
                        
                    </div>
                    <div style={{width: "40%",display: "flex",justifyContent: "space-between",alignItems: "center"}}>
                        <div style={{}}>
                            <Counter setSize={setSize}/>
                            <p style={{borderBottom: "1px solid #000"}}>Remove</p>
                        </div>
                        <div>
                            {product.price}
                        </div>
                    </div>
                </div>
            </div>
            
            
           <Footer />
        </>
    );
}

export default Checkout;