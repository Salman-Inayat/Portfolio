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
import Fade from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
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
      padding: "10px 10px 10px 1.5rem",
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
    [theme.breakpoints.up("lg")]: {
      height: "170px",
      textAlign: "center",
      width: "150px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "170px",
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
    [theme.breakpoints.down("sm")]: {
      height: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      height: "100%",
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
    transition: "0.3s all ease-in-out",
    "&:hover": {
      marginTop: "-10px",
    },
    [theme.breakpoints.up("lg")]: {
      border: "2px solid rgb(225, 181, 11)",
    },
    [theme.breakpoints.up("xl")]: {
      border: "2px solid rgb(225, 181, 11)",
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
      percent: "90",
      image: "/HTML.png",
    },
    {
      name: "CSS",
      percent: "80",
      image: "/CSS.png",
    },
    {
      name: "Javascript",
      percent: "85",
      image: "/JS.png",
    },
    {
      name: "React.js",
      percent: "80",
      image: "/ReactJs.png",
    },
    {
      name: "Node.js",
      percent: "70",
      image: "/NodeJs.png",
    },
    {
      name: "Next.js",
      percent: "70",
      image: "/Nextjs.png",
    },
    {
      name: "Git",
      percent: "80",
      image: "/GIT.png",
    },
    {
      name: "Express.js",
      percent: "70",
      image: "/Expressjs.png",
    },
    {
      name: "Sass",
      percent: "80",
      image: "/Sass.png",
    },
    {
      name: "Material UI",
      percent: "90",
      image: "/MaterialUI.png",
    },
    {
      name: "Bootstrap",
      percent: "90",
      image: "/Bootstrap.png",
    },
    {
      name: "GraphQL",
      percent: "60",
      image: "/GraphQL.png",
    },
    {
      name: "Angular.js",
      percent: "60",
      image: "/Angularjs.png",
    },
    {
      name: "PHP",
      percent: "60",
      image: "/PHP.png",
    },
    {
      name: "Mongodb",
      percent: "70",
      image: "/mongodb.png",
    },
    {
      name: "MySQL",
      percent: "70",
      image: "/MySQL.png",
    },
  ];

  const Skill_bars = () => {
    return skills.map((skill, i) => {
      const value = skill.percent;
      return (
        <Grid item md={2} sm={6} xs={6} key={i} className={classes.card_grid}>
          <Fade bottom>
            <div className={classes.card}>
              <div className={classes.card__content}>
                <div className={classes.card__container}>
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={value}
                    duration={1.1}
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
          </Fade>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.main_grid} spacing={2}>
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
