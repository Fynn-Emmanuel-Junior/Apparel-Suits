import React from 'react';
import {styles} from '../Constants/Constants'

function Footer() {
    return (
        <div>
             <div style={styles.footerContainer}>
                <footer style={styles.footer}>
                    <div style={styles.footerMain}>
                        <div style={styles.footerUl}>
                            <ul style={styles.ListContainer}>
                                <li style={styles.list}>INFO</li>
                                <li style={styles.list}>About us</li>
                                <li style={styles.list}>Shipping</li>
                                <li style={styles.list}>Return & Exchange</li>
                                <li style={styles.list}>FAQ</li>
                                <li style={styles.list}>Size Chart</li>
                                <li style={styles.list}>Suits Size Estimator</li>
                                <li style={styles.list}>Term of Service</li>
                            </ul>
                        </div>
                        <div style={styles.footerUl}>
                            <ul style={styles.ListContainer}>
                                <li style={styles.list}>Customer</li>
                                <li style={styles.list}>Contact us</li>
                                <li style={styles.list}>Showroom Reservation</li>
                                <li style={styles.list}>Login</li>
                                <li style={styles.list}>Register</li>
                            </ul>
                        </div>  
                        <div style={{color: "#fff",width: "30%"}}>
                            <p style={styles.list}>Newsletter</p>
                            <div>
                                <div style={{marginBottom: "5%"}}>
                                    <p>
                                        Join Men's Fashion Club and Receive Exclusive Promotions, Latest Fashion Trends and More. 100% Free
                                    </p>
                                </div>
                                <div>
                                    <div className='div' style={{border: "1px solid #fff", marginBottom: "5%", width: "90%"}}>
                                         <input className='input' type="email" placeholder='Enter your email address' style={{width: "100%", backgroundColor: "transparent", border: "none", padding: "5%"}}
                                       />
                                    </div>
                                    <div style={{width: "50%", backgroundColor: "#3d3e3f", position: "relative"}}>
                                        <button className='footerButton'>SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div style={{position: "relative", top: "90%",left: "5%"}}>
                        <div style={{color: "#fff"}}>
                            <p>
                                &copy; 2022 SUITS APPAREL. All Copyrights Resevered.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            
        </div>
    );
}

export default Footer;

