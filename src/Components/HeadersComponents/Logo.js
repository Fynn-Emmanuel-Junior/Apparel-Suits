import Side from "./Side";

function Logo({name}) {
    return (
        <div className="container">
            <div className="logo">
            <h1 style={{fontWeight: 'lighter', letterSpacing: '2px'}}>{name}</h1>
            <p style={{fontSize: '12px', fontWeight: 'medium', textAlign: 'center', marginTop: '5px', fontFamily: 'Helvetica'}}>MENS WEAR EXPERT | GHANA</p>
            </div>
            <Side />
        </div>
    )
}

export default Logo;