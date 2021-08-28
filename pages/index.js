import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typer from "../components/Typer";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button_container: {
    // margin: "30px 20px",
  },
  button: {
    marginBottom: theme.spacing(2),
    borderRadius: "5em",
    margin: "10px 10px",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid container style={{ height: "calc(100vh - 100px)" }}>
      <Grid item md={6} className={classes.grid}>
        <object type="image/svg+xml" data="/main.svg" height={400} width={400}>
          svg-animation
        </object>
      </Grid>
      <Grid
        item
        md={6}
        className={classes.grid}
        style={{ flexDirection: "column" }}
      >
        <h1>Hello, I am Salman Inayat</h1>
        <h3>I am a full-stack developer</h3>
        <div className={classes.button_container}>
          <Button variant="outlined" color="primary" className={classes.button}>
            Resume
          </Button>
          <Link href="Contact">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Contact Me
            </Button>
          </Link>
        </div>
        <Typer text="/About" />
      </Grid>
    </Grid>
  );
}

export default Home;
