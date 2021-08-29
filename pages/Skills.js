import React from "react";
import styles from "../styles/Skills.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../node_modules/react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import { easeQuadInOut } from "../node_modules/d3-ease/src/index";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Typer from "../components/Typer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
  main_grid: {
    padding: "20px 40px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      padding: "10px",
    },
  },
  card_grid: {
    margin: "20px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0px",
    },
  },
  skills_header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card__container: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
      height: "180px",
      textAlign: "center",
      width: "180px",
    },
  },
  card: {
    width: "100%",
    height: "100%",
    maxHeight: "300px",
    padding: "auto",
    textAlign: "center",
    background: "rgb(83, 86, 91)",
    borderRadius: "10px",
    // boxShadow: "25px 25px 50px #1b1c1b, -25px -25px 50px #2d302f",
    [theme.breakpoints.down("sm")]: {
      height: "90%",
    },
  },
  card__content: {
    width: "100%",
    height: "100%",
    background: "rgb(83, 86, 91)",
    margin: "10px auto",
    borderRadius: "5px",
    padding: "40px 20px 20px 20px",
    border: "1px solid rgb(225, 181, 11)",

    cursor: "pointer",
    // boxShadow: "6px 16px 44px #0a0a0a, -16px -16px 44px #282a28",
    transition: "0.3s all ease-in-out",
    "&:hover": {
      marginTop: "-10px",
    },
  },
  card__header: {
    textTransform: "uppercase",
    fontSize: "20px",
    margin: "40px auto",
  },
  skill_content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
  },
}));

const Skills = () => {
  const classes = useStyles();

  const skills = [
    {
      name: "HTML",
      percent: "95",
      image: "/HTML.png",
    },
    {
      name: "CSS",
      percent: "90",
      image: "/CSS.png",
    },
    {
      name: "Javascript",
      percent: "95",
      image: "/JS.png",
    },
    {
      name: "React.js",
      percent: "80",
      image: "/reactjs.png",
    },
    {
      name: "Node.js",
      percent: "70",
      image: "/NodeJs.png",
    },
    {
      name: "Mongodb",
      percent: "70",
      image: "/mongodb.png",
    },
    {
      name: "HTML",
      percent: "95",
      image: "/HTML.png",
    },
    {
      name: "CSS",
      percent: "90",
      image: "/CSS.png",
    },
    {
      name: "Javascript",
      percent: "95",
      image: "/JS.png",
    },
    {
      name: "React.js",
      percent: "80",
      image: "/reactjs.png",
    },
    {
      name: "Node.js",
      percent: "70",
      image: "/NodeJs.png",
    },
    {
      name: "Mongodb",
      percent: "70",
      image: "/mongodb.png",
    },
  ];

  const Skill_bars = () => {
    return skills.map((skill, i) => {
      const value = skill.percent;
      return (
        <Grid item md={2} sm={6} xs={6} key={i} className={classes.card_grid}>
          <div className={classes.card}>
            <div className={classes.card__content}>
              <div className={classes.card__container}>
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={value}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles({
                          pathTransition: "none",
                          textColor: "white",
                          pathColor: "rgb(225, 181, 11)",
                          trailColor: "rgb(115, 93, 10)",
                          margin: "auto",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </div>
              <div className={classes.skill_content}>
                <Typography variant="h5" component="h2">
                  {skill.name}
                </Typography>
                <Image width={40} height={40} alt="" src={skill.image} />
              </div>
            </div>
          </div>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.main_grid} spcaing={2}>
        <Grid item md={12}>
          <Typer text="Skills" />
        </Grid>
        <Grid container spacing={2}>
          <Skill_bars />
        </Grid>
        <Grid item md={12}>
          <Typer text="/Skills" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
