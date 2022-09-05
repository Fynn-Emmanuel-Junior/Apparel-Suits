import React from 'react';
import image  from '../../assets/bannerImg/banner.png';
import image1 from '../../assets/bannerImg/banner1.jpg';
import image7 from '../../assets/homePage/image7.jpg';
import image8 from '../../assets/homePage/Wedding-Garden.jpg';
import Tower from '../../assets/homePage/tower.jpg'
import "@fontsource/poppins"; 
import Footer from '../../Components/Footer';
import Cards from '../../Components/Cards';
import { styles } from '../../Constants/Constants';
import Header from '../../Components/Header';

function HomePage() {

    const tower = "tower"

    return (
        <div>
            <Header />
            <div style={styles.Main}>
                <div style={styles.imageContainer}>
                    <div style={styles.image}>
                        <img src={image1} alt={image} style={{width: "100%", height: "100%"}}/>
                    </div>
                </div>
                <div>
                    <Cards />
                </div>


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
                            <div style={{paddingBottom: "5%" , display: "flex", justifyContent: "space-evenly", width: "60%", alignItems: "flex-end", margin: "auto"}}>
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
                <div style={{marginTop: "30%"}}>
                    <div style={{display: "flex"}}>
                            <div style={{width: "50%", marginTop: "7%"}}>
                                <img width='70%' src={Tower} alt={tower} />
                            </div>
                        <div style={{width: "50%"}}>
                            <div>
                                <p style={{marginBottom: "5%"}}>
                                    COMFORTABLE, DURABLE, AFFORDABLE
                                </p>
                                <h3 style={{marginBottom: "5%", fontSize: "25px"}}>
                                    TRUE CRAFTSMANSHIP
                                </h3>
                            </div>
                            <div style={{marginBottom: "5%"}}>
                                <p>
                                    Suits Outlets®, founded in New York, USA, is a leading men's fashion platform offering men's suits, shirts, shoes and accessories with true craftsmanship. Throughout the years, the company has been helping gentlemen like you find the perfect look. We offer discount suits on sale at a price range $100 - $200. With our free shipping and 30-Day return policy, customers will have a fantastic experience shopping all kinds of menswear.
                                </p>
                            </div>
                            <div style={{marginBottom: "5%"}}>
                                <p>
                                    Suits Outlets has a full line of  men's affordable dress wear – including suits, tuxedos, dress shirts, shoes, hats and accessories – at your ideal quality and price. Our fashion selection includes 3-Piece, 2-Piece, Regular Fit, Slim Fit, Glen Plaid, Sharkskin, Double Breasted, Pinstripe, Wool, Nehru, French Cuff or Mandarin Collar, and more stylish menswear. With our expert stylists' help, customers can easily find Big and Tall suits or boy suits as well. We provide fashion advices on different occasions including but not limited to wedding, church, cruise, everyday wear, classic style/1940 style, and complete dress suit
                                </p>
                            </div>
                            <div>
                                <p>
                                    This is Suits Outlets New York, a complete men's fashion solution and a warm family. If you are looking for comfortable, durable and affordable menswear, you are in the right place. Shop smart and save more.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default HomePage;

