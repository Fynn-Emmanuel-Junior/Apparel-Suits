import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div style={styles.main}>
            <div style={styles.container}>
                <div>
                    <h3 style={styles.heading}>Login</h3>
                    <p>Please enter your e-mail and password:</p>
                </div>
                <div>
                    <form style={styles.form}>
                       <div style={{ width: "50%", margin: "auto", marginBottom: "20px", border: "0.5px solid #000"}}>
                            <input style={styles.input} type="email" placeholder='Email' required />
                       </div>
                       <div style={{width: "50%", margin: "auto", outline: "0.5px solid #000", marginBottom: "20px"}}>
                            <input style={styles.input} type="password" placeholder="Password" required />
                       </div>
                       <div style={{width: "50%", margin: "auto", marginBottom: "20px", position: "relative"}}>
                            <button className='button'>LOG IN</button>
                       </div>
                       <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "50%", margin: "auto" }}>
                            <p style={{color: "#1f1f1f", marginRight: "5px"}}>Don't have an account?</p>
                            <Link to="/signup" style={styles.link}> Create one</Link>
                       </div>
                       
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;

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

    input: {
        width: "100%",
        padding: "15px",
        border: "none"
       
    },

    link: {
        textDecoration: "none",
        color: "#000"
    },



}