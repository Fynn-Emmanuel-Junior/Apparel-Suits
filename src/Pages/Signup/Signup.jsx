import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';

function Signup() {
    return (
     <div>
        <div>
            <Header />
        </div>
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
                            <Link to='/suits'>
                                <button className='button' onClick={(e) => e.preventDefault()}>CREATE MY ACCOUNT</button>
                            </Link>
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
        border: "none",
        color: "#000000"
       
    },

    link: {
        textDecoration: "none",
        color: "#000"
    }
  
}