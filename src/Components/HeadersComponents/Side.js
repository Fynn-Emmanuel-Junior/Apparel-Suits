import {FaSearch} from "react-icons/fa";
function Side() {
    return (
        <div className="side">
             <ul className="sidebar" style={{fontFamily: 'Helvetica', fontSize: '15px'}}>
                <li>Sign In / Register</li>
                <li><FaSearch style={{color: '#000', marginRight: '5px'}}/>Search</li>
                <li style={{color: '#000'}}>Cart(0)</li>
            </ul>
        </div>
    )
}

export default Side;