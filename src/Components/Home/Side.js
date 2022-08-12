import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
function Side() {
    return (
        <div className="side">
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
    link: {
        textDecoration: 'none',
        color: "#000"
    }
}