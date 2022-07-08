function Navigationbar() {
    return (
        <div className="navbar" style={{marginTop: '40px', borderBottom: '1px solid #ccc'}}>
           <ul className="navbarlist" style={{display: 'flex', listStyleType: 'none', justifyContent: 'space-evenly', alignContent: 'center', fontFamily: 'Helvetica', fontSize: '12px', width: '70%', margin: 'auto', marginBottom: '20px'}}>
             <li>SUITS</li>
             <li>SHIRTS</li>
             <li>SHOES</li>
             <li>HATS</li>
             <li>ACCESSORIES</li>
             <li>TRACKING SUITS</li>
             <li>SUITS SEPERATES</li>
             <li>WALKING SUITS</li>
           </ul>
        </div>
    )
}

export default Navigationbar;