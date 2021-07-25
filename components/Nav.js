import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import fileSaver from "file-saver";

const Nav = (props) => {
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/public/Salman_Inayat_Resume.pdf",
      "MyCV.pdf"
    );
  };

  return (
    <nav className={navStyles.nav}>
      <Grid container>
        <Grid item md={12} sm={12}>
          <img src="/salman_inayat.png" alt="logo"></img>
        {/* </Grid> */}
        {/* <Grid item md={5} sm={12} className={navStyles.button_container}> */}
          <Button
            className={navStyles.button}
            variant="outlined"
            color="secondary"
            onClick={saveFile}
          >
            Download Resume
          </Button>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Nav;
