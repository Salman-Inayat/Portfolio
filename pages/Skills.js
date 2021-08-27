import React from "react";
import styles from "../styles/Skills.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../node_modules/react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import { easeQuadInOut } from "../node_modules/d3-ease/src/index";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

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
    margin: "20px",
  },
  skills_header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: "100%",

    maxHeight: "300px",
    padding: "auto",
    textAlign: "center",
    background: "#242625",
    borderRadius: "10px",
    boxShadow: "25px 25px 50px #1b1c1b, -25px -25px 50px #2d302f",
  },
  card__content: {
    width: "100%",
    height: "100%",
    background: "#191a19",
    margin: "10px auto",
    borderRadius: "5px",
    padding: "40px 20px 20px 20px",
    cursor: "pointer",
    boxShadow: "6px 16px 44px #0a0a0a, -16px -16px 44px #282a28",
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
  ];

  const Skill_bars = () => {
    return skills.map((skill, i) => {
      const value = skill.percent;
      return (
        <Grid item md={2} sm={12} key={i} className={classes.card_grid}>
          <div className={classes.card}>
            <div className={classes.card__content}>
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
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        pathTransition: "none",
                        textColor: "white",
                        pathColor: "white",
                        trailColor: "transparent",
                      })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <div className={classes.skill_content}>
                <Typography variant="h5" component="h2">
                  {skill.name}
                </Typography>
                <Image width={50} height={50} alt="" src={skill.image} />
              </div>
            </div>
          </div>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.main_grid} spacing={1}>
        <Grid item md={12} className={classes.skills_header}>
          <Typography gutterBottom variant="h5" component="h2">
            Skills I am good at
          </Typography>
        </Grid>
        <Skill_bars />
      </Grid>
    </div>
  );
};

export default Skills;
