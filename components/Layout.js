import styles from "../styles/Layout.module.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Particles from "react-particles-js";
import particlesConfig from "../public/particlesConfig";

const Layout = ({ children }) => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#1F2833",
        height: "height: calc(100% - 110px)",
      }}
    >
      <Particles
        height="100%"
        width="100%"
        params={particlesConfig}
        style={{ position: "fixed", zIndex: "1" }}
      />
      <Header />
      <Grid
        item
        md={12}
        style={{ margin: "50px 0px", color: "white", zIndex: "999" }}
      >
        <main>{children}</main>
      </Grid>
    </Grid>
  );
};

export default Layout;
