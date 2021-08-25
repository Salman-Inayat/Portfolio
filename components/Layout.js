import styles from "../styles/Layout.module.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Header />
      <Grid item md={12} style={{ margin: "50px 0px" }}>
        <main>{children}</main>
      </Grid>
    </Grid>
  );
};

export default Layout;
