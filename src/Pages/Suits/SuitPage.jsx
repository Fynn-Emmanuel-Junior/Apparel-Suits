import React, {   useEffect,useState } from 'react';
import Products from '../../Constants/SuitImages';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from  'react-router-dom';
import { BarLoader } from 'react-spinners';


const SuitPage = ({setProductid,setProduct}) => {

    // const [Products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000);
        
    },[])
    return (
        <div>
            <Header />
            <div style={{display: "flex", width:"100%", marginTop: "2%"}}>
                <div style={{backgroundColor: "#F5F6F7", width: "15%", height: "400px", marginRight: "4%", marginLeft: "4%" , borderRadius: "5px"}}>
                        <div style={{width: "100%", margin: "auto",paddingTop: "10%"}}>
                            <ul style={{listStyleType: 'none', fontSize: '12px', width: '100%'}}>
                                <li style={Styles.list}><Link to="/suits" style={Styles.link}>SUITS</Link></li>
                                <li style={Styles.list}><a href="###" style={Styles.link}>SHIRTS</a></li>
                                <li style={Styles.list}><a href="###" style={Styles.link}>SHOES</a></li>
                                <li style={Styles.list}><a href="###" style={Styles.link}>HATS</a></li>
                                <li style={Styles.list}><a href="###" style={Styles.link}>ACCESSORIES</a></li>
                                <li style={Styles.list}><a href="###" style={Styles.link}>TRACKING SUITS</a></li>
                                <li style={Styles.list}><a href="###" style={Styles.link}>SUITS SEPERATES</a></li>
                                <li style={Styles.list}><a href="###" style={Styles.link}>WALKING SUITS</a></li>
                            </ul>
                        </div>
                </div>
                <div className='Grid'>
                   
                    {
                        Products.map((product) => {
                            return (
                                <Link to={`/suits/${product.id}`} style={Styles.link} key={product.id} onClick={() => {
                                    setProductid(product.id);
                                    setProduct(product);
                                   
                                }}>
                                     <div>
                                     {
                                        loading ? 
                                        <div style={{marginTop: "120%",marginLeft: "70%"}}>
                                            <BarLoader  />
                                        </div>
                                        : 
                                        
                                        <div style={{width: "100%", border: "0.5px solid #eeeeee", cursor: "pointer"}}>
                                            <div style={{width: "180px", margin: "auto"}}>
                                                <img style={{width: "100%", height: "100%"}} key={product.id}  src={product.Image} alt={"product"}/>
                                            </div>
                                            <div>
                                                <div style={{width: "80%", margin: "auto", textAlign: "center",fontSize: "12px"}}>
                                                    {product.title}
                                                </div>
                                                <div style={{textAlign: "center", color: "#277bc0", marginBottom: "10px"}}>
                                                    {product.price}  {<del>{product.price1}</del>}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    </div>
                                
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div style={{width: "100%", marginTop: "10%"}}>
                <div style={{width: "40%", margin: "auto"}}>
                    <div style={{textAlign: "center"}}>
                        Men's Suits
                    </div>
                    <div style={{textAlign: "center", marginTop: "5%"}}>
                         Different styles men's suits at Suits Apparel. Free shipping on qualified orders. We have a whole collection of different suit styles, including our featured executive suit, sharkskin suit, double-breasted suit, Chinese collar suit or Nehru suit, windowpane men's suit, banker stripe men's suit and so on. Whether you are looking for big men's clothing, tall men's clothing, clothes for short men or suits for short men, you'll find it here
                    </div>
                    <div style={{textAlign: "center", marginTop: "5%"}}>
                        Suits Apparel is a one-stop suit outlet for menswear online. Not only because of the wide selection of quality suits for sale online, but also because of the discounted-priced suits for men. Before shopping, we highly recommend referencing to the suit size estimate. From men's size 36 to size 72. Suits come in short size suit, long size suit and regular size suit. We also have a special collection for big and tall men's sizes. It is convenient for our valued customers to find exactly what they are looking for at Suits Outlets Menswear
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
           
            
        </div>
    );
}

export default SuitPage;

const  Styles = {
    list: {
        padding: "5%",
        fontSize: "15px"
    },
    link: {
        textDecoration: "none",
        color: "#000"
    }
   
}

