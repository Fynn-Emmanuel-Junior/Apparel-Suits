import React from 'react';
import { styles } from '../Constants/Constants';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <div>
            <div style={styles.sectionMain}>
                <div className='sectionContainer'>

                    <div className='section-image'>
                        <div className='image1' style={styles.gridImage}>
                          <div style={styles.overlay1}>
                          </div>
                          <div style={styles.imageButton}>
                              <p style={{marginBottom: "10%",fontSize: "25px"}}>DOUBLE BREASTED</p>
                              <div style={{width: "80%", backgroundColor: "#fff", position: "relative"}}>
                                    <Link to={'/suits'} className='homeButton'>VIEW PRODUCTS</Link>
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
            
        </div>
    );
}

export default Cards;

