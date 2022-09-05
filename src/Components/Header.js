import Logo  from "./Logo";
import Navigationbar from "./Navigationbar";
import Side from "./Side";
import "@fontsource/poppins";

function Header() {
    return (
       <div style={styles.Main}>
            <header className="header">
                <div style={styles.headingContainer}>
                    <div style={styles.heading}>
                        <p>Limited Time Only, Seasonal Clearance Sale</p>
                    </div>
                </div>
                <div style={styles.headerbar}>
                    <div style={styles.headerbarContainer}>
                        <div>
                          <Logo />
                        </div>
                        <div>
                          <Side />
                        </div>
                    </div>
                    <div style={{marginTop: "30px", borderBottom: "1px solid #cccdcf", paddingBottom: "15px"}}>
                        <Navigationbar />
                    </div>
                </div>
            </header>
       </div> 
    )
}

export default Header;

const styles = {
    Main: {
    fontWeight: "Poppins",
    position: "sticky",
    top: 0,
    zIndex: "2",
    backgroundColor: "#F5F6F7"

    },

    headingContainer: {
       width: "100%",
       backgroundColor: "#000"
    },

    heading: {
       color: "#fff",
       textAlign: "center",
       padding: "10px"
    },

    headerbar: {
      position: "sticky",
      top: 0
    },

    headerbarContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}