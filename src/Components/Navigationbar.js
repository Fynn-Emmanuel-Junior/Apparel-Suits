function Navigationbar() {
    return (
        <div style={styles.container}>
          <div style={styles.list}>
            <ul className="navbarlist" style={{display: 'flex', listStyleType: 'none', justifyContent: 'space-between', alignContent: 'center', fontSize: '12px', width: '100%'}}>
              <li><a href="###">SUITS</a></li>
              <li><a href="###">SHIRTS</a></li>
              <li><a href="###">SHOES</a></li>
              <li><a href="###">HATS</a></li>
              <li><a href="###">ACCESSORIES</a></li>
              <li><a href="###">TRACKING SUITS</a></li>
              <li><a href="###">SUITS SEPERATES</a></li>
              <li><a href="###">WALKING SUITS</a></li>
            </ul>
          </div>
        </div>
    )
}

export default Navigationbar;

const styles = {
    container: {
    width: "70%",
    margin: "auto",
    position: "sticky",
    top: 0,
   
  },

  list: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    position: "relative",
  
  }
}

