import React from 'react';
import Images from '../../Constants/SuitImages';
import HeaderNav from '../../Components/HeaderNav';



function SuitPage() {
    return (
        <div>
            <HeaderNav />
            <div style={{display: "flex", marginTop: "5%"}}>
                <div>
                    <div style={{backgroundColor: "#F5F6F7", width: "200px", height: "400px", marginLeft: "10%",  borderRadius: "10px"}}>
                        <div style={{width: "80%", margin: "auto",paddingTop: "10%"}}>
                            <ul style={{listStyleType: 'none',  fontSize: '12px', width: '100%'}}>
                                <li style={Styles.list}><a href="##" style={Styles.link}>SUITS</a></li>
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
                </div>
                <div style={{display: "flex"}}>
                    {
                        Images.map((image) => {
                            return (
                                <div>
                                    <div>
                                        <img key={image.id}  src={image.Image} alt=""/>
                                    </div>
                                    <div>
                                        {image.price}
                                    </div>
                                </div>
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

