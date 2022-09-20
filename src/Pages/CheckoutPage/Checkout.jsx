import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Checkout({product}) {
    return (
        <div>
            <Header />
            <div>
                <img src={product.image} alt={'Product'} />
            </div>
           <Footer />
        </div>
    );
}

export default Checkout;