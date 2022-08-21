import React from 'react';
import image  from '../assets/bannerImg/banner.png';
import image1 from '../assets/bannerImg/banner1.jpg';
import image7 from '../assets/homePage/image7.jpg';
import image8 from '../assets/homePage/Wedding-Garden.jpg';
import "@fontsource/poppins"; 


function HomePage() {
    return (
        <div style={styles.Main}>
            <div style={styles.imageContainer}>
                <div style={styles.image}>
                    <img src={image1} alt={image} style={{width: "100%", height: "100%"}}/>
                </div>
            </div>
            <div style={styles.sectionMain}>
                <div className='sectionContainer'>

                    <div className='section-image'>
                        <div className='image1' style={styles.gridImage}>
                          <div style={styles.overlay1}>
                          </div>
                          <div style={styles.imageButton}>
                              <p style={{marginBottom: "10%",fontSize: "25px"}}>DOUBLE BREASTED</p>
                              <div style={{width: "80%", backgroundColor: "#fff", position: "relative"}}>
                                    <button className='homeButton'>VIEW PRODUCTS</button>
                              </div>
                          </div> 
                        </div>  
                    </div>

                    <div className='section-image'>
                        <div className='image2' style={styles.gridImage}>
                            <div style={styles.overlay2}>
                            </div>
                          <div  style={styles.imageButton}>
                              <p style={{marginBottom: "10%",fontSize: "25px"}}>WOOL</p>
                              <div className='imageButton' style={{width: "80%", backgroundColor: "#fff", position: "relative"}}>
                                    <button className='homeButton'>VIEW PRODUCTS</button>
                              </div>
                          </div> 
                        </div>  
                    </div>

                    <div className='section-image'>
                        <div className='image3' style={styles.gridImage}>
                            <div style={styles.overlay3}>
                            </div>
                          <div style={styles.imageButton}> 
                              <p style={{marginBottom: "10%",fontSize: "25px"}}>PINSTRIPE</p>
                              <div style={{width: "80%", backgroundColor: "#fff", position: "relative"}}>
                                    <button className='homeButton'>VIEW PRODUCTS</button>
                              </div>
                          </div> 
                        </div>  
                    </div>

                    <div className='section-image'>
                        <div className='image4' style={styles.gridImage}>
                            <div style={styles.overlay4}>
                            </div>
                          <div style={styles.imageButton}>
                              <p style={{marginBottom: "10%",fontSize: "25px"}}>GLEIN PAID</p>
                              <div style={{width: "80%", backgroundColor: "#fff", position: "relative"}}>
                                    <button className='homeButton'>VIEW PRODUCTS</button>
                              </div>
                          </div> 
                        </div>  
                    </div>

                    <div className='section-image'>
                        <div className='image5' style={styles.gridImage}>
                            <div style={styles.overlay5}>
                            </div>
                          <div style={styles.imageButton}>
                              <p style={{marginBottom: "5%",fontSize: "25px"}}>WEEDING</p>
                              <div style={{width: "80%", backgroundColor: "#fff", position: "relative"}}>
                                    <button className='homeButton'>VIEW PRODUCTS</button>
                              </div>
                          </div> 
                        </div>  
                    </div>

                    <div className='section-image'>
                        <div className='image6' style={styles.gridImage}>
                            <div style={styles.overlay6}>
                            </div>
                          <div style={styles.imageButton}>
                              <p style={{marginBottom: "5%",fontSize: "25px"}}>SHARKSKIN</p>
                              <div style={{width: "80%", backgroundColor: "#fff", position: "relative"}}>
                                    <button className='homeButton'>VIEW PRODUCTS</button>
                              </div>
                          </div> 
                        </div>  
                    </div>
                </div>
            </div><hr/>
            <div>
                <div>
                    <div style={styles.Heading}>
                        <p> Fashion Tips and Knowlegde </p>
                    </div>
                    <div style={styles.headingContainer}>
                        <div style={{width: "70%", height: "auto",margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div>
                                <div style={{width: "120px", height: "70px"}}>
                                    <em style={{fontSize: "20px", fontWeight: "bold"}}>
                                        What is Wool Felt?
                                    </em>
                                </div>
                            </div>
                            <div>
                                <p style={{fontSize: "20px", width: "80px", textAlign: "center"}}>
                                    SLACK vs PANTS
                                </p>
                            </div>
                            <div style={styles.heading3}>
                                <div style={styles.imageHeading}>
                                    <img src={image7} alt={image7} width="100%" height="100%"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div style={styles.text}>
                        <div style={styles.textContainer}>
                            <div style={{marginBottom: "5%"}}>
                                <h3>
                                    What is <q>Wool Felt</q>?
                                </h3>
                            </div>
                            <div style={{fontSize: "15px"}}>
                                <ul>
                                    <li style={styles.listContainer}>
                                         Wool Felt is a non-woven textile. There is no thread or weaving involved in production.
                                    </li>
                                    <li style={styles.listContainer}>
                                        It originates as wool roving and by adding heat, moisture and agitation, the roving compacts and matts together tightly to form what we refer to as pure wool felt.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={styles.textContainer}>
                            <div style={{marginBottom: "5%"}}>
                                <h3>
                                    What is the differnce between Slack and Pants
                                </h3>
                            </div>
                            <div style={{fontSize: "15px"}}>
                                <ul>
                                    <li style={styles.listContainer}>
                                         Slacks are very loose fitting while pants are not that loose though they are also comfortable.
                                    </li>
                                    <li style={styles.listContainer}>
                                        Pants are formal while slacks are casual wear.
                                    </li>
                                    <li style={styles.listContainer}>
                                        Pants can be worn in offices, but slacks cannot be worn in formal occasions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={styles.textContainer}>
                            <div style={{marginBottom: "5%"}}>
                                <h3>
                                    What is Walking Suit?
                                </h3>
                            </div>
                            <div style={{fontSize: "15px"}}>
                                <ul>
                                    <li style={styles.listContainer}>
                                        Walking suit, by definition, consists of a top shirt and matching pants. The most popular fabrics are polyester, cotton and silk.
                                    </li>
                                    <li style={styles.listContainer}>
                                        Walking suits fill in the gap between formal wear and casual. Walking suit was originated from traje from Caribbean islands, such as Puerto Rico.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>                                                                     
                </div>
            </div>
            <div style={{width: "100%", height: "auto",marginTop: "10%"}}>
                <div style={{width: "100%", height: "100%", position: "relative"}}>
                    <img src={image8} alt={image8}  width="100%" height="100%"/>
                <div style={{width: "100%",height: "auto",backgroundColor: "#3d3e3f", color: "#fff", position: "absolute", bottom: "-60%"}}>
                    <div style={{width: "70%",margin: "auto"}}>
                        <div style={{textAlign: "center", fontSize: "20px", marginTop: "3%"}}>
                            <h3>Newsletter</h3>
                        </div>
                        <div style={styles.newsContainer}>
                            <p>
                                Sign Up For Exclusive Online Menswear Outlet Deal for Suit &amp; More. Whether you you looking for big men's clothing, tall men's clothing, clothes for short men or suits for short men, you'll find it here. By entering your email address below, you agree to receive promotional offers or discounts for special events. Unless notified, one coupon code cannot be used combined with other promotional. offers offers valid according to email. Offers may include: all category suits, suit separates, dress shirts, dress pants, cheap suits sale, etc. Please note additional charges may apply for big tall sizes.
                            </p>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-evenly", width: "60%", alignItems: "flex-end", margin: "auto"}}>
                            <div style={{marginTop: "5%", border: "1px solid red"}}>
                                <input className="input" style={styles.newsInput} type="email" placeholder='Enter your email address' size="40" />
                            </div>
                            <div style={styles.button}>
                                <p>SUBSCRIBE</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

const styles = {
    Main: {
      fontWeight: "Poppins"
    },

    imageContainer: {
        width: "100%",
        height: "450px"
    },

    image: {
        width: "100%",
        height: "100%"
    },

    sectionMain: {
        width: "100%",
        height: "800px",
        marginTop: "30px",
        marginBottom: "30px"
        
    },

    gridImage: {
      width: "100%",
      height: "100%",
      position: "relative",
      
    },

    imageButton: {
      width: "70%",
      height: "40%",
      position: "absolute",
      top: "60%",
      left: "10%",
      color: "#fff",
    
      
    },
    
    buttonProduct: {
        padding: "15px",
        marginButtom: "15%"
    },

    overlay1: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        opacity: "0.7"
    },

    overlay2: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        opacity: "0.6"
    },

    overlay3: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        opacity: "0.7"
    },

    overlay4: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        opacity: "0.6"
    },

    overlay5: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        opacity: "0.7"
    },

    overlay6: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        opacity: "0.7"
    },

    Heading: {
        marginTop:"80px", 
        textAlign: "center",
        fontSize: "20px"
    },

    headingContainer: {
        marginTop: "120px",
       
    },

    heading3: {
        width: "130px",
        height: "130px"

    },

    imageHeading: {
        width: "100%",
        height: "100%"
        
    },

    text: { 
        width: "90%",
        height: "auto",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "3%",
        
    },

    textContainer: {
        width: "30%", 
        height: "28%"
    },

    listContainer: {
        listStyleType: "none",
        marginBottom: "5%",
        fontSize: "13px"
    },

    newsContainer: {
        fontSize: "14px",
        width: "60%",
        height: "auto", 
        textAlign: "center",
        margin: "auto",
        marginTop: "2%",
        wordSpacing: "5px",
        lineHeight: "180%"
    },

    newsInput: {
        padding: "12px",
        backgroundColor: "transparent",
        border: "none",
        outline: "1px solid #fff"

    },

    button: {
        width: "25%",
        height: "auto",
        backgroundColor: "#fff",
        color: "#000",
        padding: "9px",
        textAlign: "center",
        letterSpacing: "2px"
    }

    



}