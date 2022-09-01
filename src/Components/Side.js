import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
import "@fontsource/poppins";


function Side() {
    return (
        <div style={styles.Main} className="side">
             <ul className="sidebar" style={{ fontSize: '15px'}}>
                <li><Link to='/signin' style={styles.link}> Sign In / Register</Link></li>
                <li><FaSearch style={{color: '#000', marginRight: '5px'}}/>Search</li>
                <li style={{color: '#000'}}>Cart(0)</li>
            </ul>
        </div>
    )
}

export default Side;

const styles = {
    Main: {
       fontWeight: "Poppins",
    },

    link: {
        textDecoration: 'none',
        color: "#000"
    }
}