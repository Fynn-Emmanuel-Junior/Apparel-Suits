import { Link } from "react-router-dom"

function Logo() {
    return (
        <div className="container">
            <Link to='/' style={styles.link}>
                <div style={styles.logo}>
                    <h1 style={{fontWeight: 'bold'}}>SUITS APPAREL</h1>
                    <p style={{fontSize: '12px', fontWeight: 'medium', textAlign: 'center', marginTop: '5px'}}>MENS WEAR EXPERT | GHANA</p>
                </div>
            </Link>
        </div>
    );
}

export default Logo;

const styles = {
    logo: {
        cursor: "pointer"
    },

    link: {
        textDecoration: "none",
        color: "#000"
    }
}
