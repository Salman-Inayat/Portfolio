import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  grid_container: {
    height: "100%",
    marginTop: "50px",
    // [theme.breakpoints.up("lg")]: {
    //   height: "calc(100vh - 150px)",
    // },
  },
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
    [theme.breakpoints.down("sm")]: {
      "&:focus": {
        backgroundColor: "rgb(225, 181, 11)",
        color: "black",
      },
    },
    // [theme.breakpoints.up("lg")]: {
    //   width: "200px",
    //   height: " 50px",
    //   fontSize: "1.3rem",
    //   border: "2px solid rgb(225, 181, 11)",
    // },
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
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "2.5rem",
    // },
  },
  text2: {
    fontSize: "3rem",
    fontWeight: "500",
    margin: "0px",
    color: "#e1b50b",
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "4rem",
    // },
  },
  text3: {
    fontSize: "1.4rem",
    fontWeight: "400",
    letterSpacing: "2px",
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "2rem",
    // },
  },
  techtext: {
    color: "#e1b50b",
    fontWeight: "bold",
  },
  gif: {
    zIndex: "2000",
    height: "400px",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "85%",
    },
    // [theme.breakpoints.up("lg")]: {
    //   height: "120%",
    //   width: "60%",
    // },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid_container}>
      <Grid item md={6} className={classes.grid}>
        <object
          type="image/svg+xml"
          data="/main.svg"
          height={400}
          width={400}
          className={classes.gif}
          alt="landing"
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
            <h3 className={classes.text1}>HI THERE<span><Image src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width={30}></span> I'M, </h3>
            <h1 className={classes.text2}>SALMAN INAYAT</h1>
            <h2 className={classes.text3}>
              A{" "}
              <span className={classes.techtext}>Full-Stack Web Developer</span>{" "}
              passionate about creating interactive applications and experiences
              on web
            </h2>
            <div className={classes.button_container}>
              <a
                href="/Resume.pdf"
                // download
                // passHref
                target="_blank"
                rel="noreferrer"
                // className={classes.button_link}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Resume
                </Button>
              </a>
              <Link href="Contact" passHref className={classes.button_link}>
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
      </Grid>
    </Grid>
  );
}

export default Home;
