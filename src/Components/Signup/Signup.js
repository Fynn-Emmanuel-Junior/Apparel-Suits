import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
     <div>
        <div style={styles.main}>
            <div style={styles.container}>
                <div>
                    <h3 style={styles.heading}>Register</h3>
                    <p>Please fill in the information below</p>
                </div>
                <div>
                    <form style={styles.form}>
                        <div style={styles.formDiv}>
                            <input style={styles.input} type="firstname" placeholder='First name' required />
                       </div>

                       <div style={styles.formDiv}>
                            <input style={styles.input} type="lastname" placeholder='Last name' required />
                       </div>

                       <div style={styles.formDiv}>
                            <input style={styles.input} type="email" placeholder='Email' required />
                       </div>

                       <div style={{width: "50%", margin: "auto", outline: "0.5px solid #cccdcf", marginBottom: "20px"}}>
                            <input style={styles.input} type="password" placeholder="Password" required />
                       </div>

                       <div style={{width: "50%", margin: "auto", marginBottom: "20px", position: "relative"}}>
                            <button className='button'>CREATE MY ACCOUNT</button>
                       </div>
                    </form>
                </div>
               
            </div>
        </div>
        <div style={styles.footerContainer}>
                <footer style={styles.footer}>
                    <div style={styles.footerMain}>
                        <div style={styles.footerUl}>
                            <ul style={styles.listContainer}>
                                <li style={styles.list}>INFO</li>
                                <li style={styles.list}>About us</li>
                                <li style={styles.list}>Shipping</li>
                                <li style={styles.list}>Return &copy; Exchange</li>
                                <li style={styles.list}>FAQ</li>
                                <li style={styles.list}>Size Chart</li>
                                <li style={styles.list}>Suits Size Estimator</li>
                                <li style={styles.list}>Term of Service</li>
                            </ul>
                        </div>
                        <div style={styles.footerUl}>
                            <ul style={styles.listContainer}>
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
                                    <div style={{border: "1px solid #fff", marginBottom: "5%", width: "90%"}}>
                                         <input className='input' type="email" placeholder='Enter your email address' style={{width: "100%", backgroundColor: "transparent", border: "none", padding: "5%"}} />
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

export default Signup;

const styles = {
    main: {
        width: "60%",
        textAlign: "center",
        margin: "auto",
        marginTop: "5%"

    },

    container: {
        width: "100%",
        
    },
    
    heading: {
        marginBottom: "20px",
        fontWeight: "normal"
    },

    form: {
        marginTop: "20px"
    },

    formDiv: {
        width: "50%",
        margin: "auto",
        marginBottom: "20px", 
        outline: "0.5px solid #cccdcf"
    },

    input: {
        width: "100%",
        padding: "15px",
        border: "none"
       
    },

    link: {
        textDecoration: "none",
        color: "#000"
    },

    footerContainer: {
        backgroundColor: "#000",
        width: "100%", 
        height: "550px",
        marginTop: "5%",
        position: "relative",
        overflow: "hidden"
    },

    footer: {
        width: "100%", 
        height: "inherit",
        position: "inherit",

    },

    footerMain: {
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "90%",
        margin: "auto",
        marginTop: "5%",
        left: "5%"
        
    },

    footerUl: {

    },

    listContainer: {
        color: "#fff",
        listStyleType: "none",
       
    },

    list: {
        paddingBottom: "10%"
    }

}