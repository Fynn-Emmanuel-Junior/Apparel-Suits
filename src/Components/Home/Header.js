import Logo  from "./Logo";
import Navigationbar from "./Navigationbar";

function Header() {
    return (
        <header className="header">
            <div className="topbackground" style={{color: 'white', textAlign: 'center', position: 'relative'}}>
               <p style={{marginTop: '10px', position: 'absolute', left: '38%', fontSize: '15px'}}>Limited Time Only, Seasonal Clearance Sale</p>
            </div>
            <Logo name="SUITS APPAREL" />
            <Navigationbar />
        </header>
    )
}

export default Header;