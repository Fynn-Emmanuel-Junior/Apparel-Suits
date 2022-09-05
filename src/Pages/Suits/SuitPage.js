import React from 'react';
import Images from '../../Constants/SuitImages';
import HeaderNav from '../../Components/HeaderNav';
import { Link } from  'react-router-dom';



function SuitPage({HandleEvent}) {

    return (
        <div>
            <HeaderNav />
            <div style={{display: "flex", width:"100%", marginTop: "2%"}}>
                <div style={{backgroundColor: "#F5F6F7", width: "15%", height: "400px", marginRight: "4%", marginLeft: "4%" , borderRadius: "5px"}}>
                        <div style={{width: "100%", margin: "auto",paddingTop: "10%"}}>
                            <ul style={{listStyleType: 'none',  fontSize: '12px', width: '100%'}}>
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
                        Images.map((image) => {
                            return (
                                <Link to='/suitItem' style={Styles.link}  onclick={HandleEvent}>
                                    <div style={{width: "100%", border: "0.5px solid #eeeeee", cursor: "pointer"}}>
                                        <div style={{width: "180px", margin: "auto"}}>
                                            <img style={{width: "100%", height: "100%"}} key={image.id}  src={image.Image} alt=""/>
                                        </div>
                                        <div>
                                            <div style={{width: "80%", margin: "auto", textAlign: "center"}}>
                                                {image.title}
                                            </div>
                                            <div style={{textAlign: "center", color: "#277bc0", marginBottom: "10px"}}>
                                                {image.price} {<del>{image.price1}</del>}
                                            </div>
                                        </div>
                                    </div>
                                
                                </Link>
                            )
                        })
                    }
                </div>
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

