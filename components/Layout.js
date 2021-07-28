import styles from "../styles/Layout.module.css";
import DemoSidebar from "./DemoSidebar";
import { Grid } from "@material-ui/core";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item md={3}>
        <SideBar />
      </Grid>
      <Grid item md={9} style={{ margin: "50px 0px" }}>
        <main>{children}</main>
      </Grid>
    </Grid>
  );
};

export default Layout;
