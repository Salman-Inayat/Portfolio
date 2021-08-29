import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button_link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  button: {
    marginBottom: theme.spacing(2),
    borderRadius: "5em",
    margin: "10px 15px 0px 0px",
    border: "1px solid rgb(225, 181, 11)",
    color: "rgb(225, 181, 11)",
    textDecoration: "none",
    letterSpacing: "1px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(225, 181, 11)",
      color: "black",
    },
  },
  content_container: {
    textAlign: "left",
    padding: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
  text1: {
    fontSize: "1.5rem",
    fontWeight: "400",
    margin: "10px 0px",
  },
  text2: {
    fontSize: "3rem",
    fontWeight: "500",
    margin: "0px",
    color: "#e1b50b",
  },
  text3: {
    fontSize: "1.4rem",
    fontWeight: "400",
    letterSpacing: "2px",
  },
  techtext: {
    color: "#e1b50b",
  },
  gif: {
    zIndex: "2000",
    [theme.breakpoints.down("sm")]: {
      height: "85%",
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid container style={{ height: "100%", marginTop: "50px" }}>
      <Grid item md={6} className={classes.grid}>
        <object
          type="image/svg+xml"
          data="/main.svg"
          height={400}
          width={400}
          className={classes.gif}
        >
          svg-animation
        </object>
      </Grid>
      <Grid
        item
        md={6}
        className={classes.grid}
        style={{ flexDirection: "column" }}
      >
        <Fade bottom>
          <div className={classes.content_container}>
            <h3 className={classes.text1}>HI THERE I'M, </h3>
            <h1 className={classes.text2}>SALMAN INAYAT</h1>
            <h3 className={classes.text3}>
              A{" "}
              <span className={classes.techtext}>Full-Stack Web Developer</span>{" "}
              passionate about creating interactive applications and experiences
              on web
            </h3>
            <div className={classes.button_container}>
              <Link href="/Resume.pdf" download className={classes.button_link}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Resume
                </Button>
              </Link>
              <Link href="Contact" className={classes.button_link}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </Fade>

        {/* <Typer text="/About" /> */}
      </Grid>
    </Grid>
  );
}

export default Home;
