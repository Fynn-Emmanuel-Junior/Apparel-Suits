import React from 'react';
import Footer from '../../Components/Footer';
import {styles} from '../../Constants/Constants';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div>
            <div style={styles.main}>
                <div style={styles.container}>
                    <div>
                        <h3 style={styles.heading}>Login</h3>
                        <p>Please enter your e-mail and password:</p>
                    </div>
                    <div>
                        <form style={styles.form}>
                        <div className='div' style={{ width: "50%", margin: "auto", marginBottom: "20px", outline: "1px solid #cccdcf"}}>
                                <input style={styles.input} type="email" placeholder='Email' required   onFocus={() => {
                                            const div = document.querySelector('.div');
                                            div.classList.add('focus');
                                         }}
                                         
                                         onBlur={() => {
                                            const div = document.querySelector('.div');
                                            div.classList.remove('focus');
                                         }} />
                        </div>
                        <div className='div1' style={{width: "50%", margin: "auto", outline: "1px solid #cccdcf", marginBottom: "20px"}}>
                                <input style={styles.input} type="password" placeholder="Password" required 
                                  onFocus={() => {
                                    const div = document.querySelector('.div1');
                                    div.classList.add('focus');
                                 }}
                                 
                                 onBlur={() => {
                                    const div = document.querySelector('.div1');
                                    div.classList.remove('focus');
                                 }}
                                />
                        </div>
                        <div style={{width: "50%", margin: "auto", marginBottom: "20px", position: "relative"}}>
                                <button className='button'>LOG IN</button>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "50%", margin: "auto" }}>
                                <p style={{color: "#94969b", marginRight: "5px"}}>Don't have an account?</p>
                                <Link to="/signup" style={styles.link}> Create one</Link>
                        </div>
                        </form>
                    </div> 
                </div>
            </div>
           <div>
               <Footer />
           </div>

        </div>
    );
}

export default Signin;

