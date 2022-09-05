import Logo  from "./Logo";
import Side from "./Side";
import "@fontsource/poppins";

function HeaderNav() {
    return (
       <div style={styles.Main}>
            <header className="header" style={{height: "150px"}}>
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
                </div>
            </header>
       </div> 
    )
}

export default HeaderNav;

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