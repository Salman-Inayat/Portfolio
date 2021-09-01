import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  grid_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  githubIcon: {
    color: "#fff",
    height: "40px",
    width: "40px",
  },
  linkedInIcon: {
    color: "#0072b1",
  },
  facebookIcon: {
    color: "#105785",
  },
  twitterIcon: {
    color: "#00acee",
  },
  copyrightText: {
    color: "#fff",
    marginTop: "0px",
    fontFamily: "Ubuntu",
    fontWeight: "300",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid_container}>
      <Grid item md={12} xs={12} sm={12}>
        <a
          href="http://www.github.com/Salman-Inayat"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/github.png" alt="github" width={48} height={48} />
        </a>
        <a
          href="https://linkedin.com/in/salman-inayat-69a634197/"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/linkedin.png" alt="linkedin" width={48} height={48} />
        </a>
        <a
          href="https://www.facebook.com/salmaninayat955"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/facebook.png" alt="Facebook" width={48} height={48} />
        </a>
        <a
          href="https://twitter.com/SalmanInayat5"
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/twitter.png" alt="Twitter" width={48} height={48} />
        </a>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <h3 className={classes.copyrightText}>
          &copy; Copyright 2021 Salman Inayat
        </h3>
      </Grid>
    </Grid>
  );
}

export default Footer;
