import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Sidebar from "./Sidebar";
import { Grid } from "@material-ui/core";

const Layout = ({ children }) => {

  return (
    <Grid container>
      <Grid item md={12}>
        <Nav />
      </Grid>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
      <Grid item md={9}>
        <main>{children}</main>
      </Grid>
    </Grid>
  );
};

export default Layout;
