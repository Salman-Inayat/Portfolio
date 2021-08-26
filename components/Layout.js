import styles from "../styles/Layout.module.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#1F2833",
        height: "height: calc(100% - 110px)",
      }}
    >
      <Header />
      <Grid item md={12} style={{ margin: "50px 0px", color: "white" }}>
        <main>{children}</main>
      </Grid>
    </Grid>
  );
};

export default Layout;
