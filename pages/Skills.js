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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  main_grid: {
    padding: "20px 40px",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      padding: "10px",
    },
  },
  hidden_text: {
    color: "rgba(0,0,0,0)",
  },
  card_grid: {
    margin: "20px",
  },
}));

const Skills = () => {
  const classes = useStyles();

  const skills = [
    {
      name: "HTML",
      percent: "95",
    },
    {
      name: "CSS",
      percent: "90",
    },
    {
      name: "JS",
      percent: "95",
    },
    {
      name: "React.js",
      percent: "80",
    },
    {
      name: "Node.js",
      percent: "70",
    },
    {
      name: "Mongodb",
      percent: "70",
    },
  ];

  const Skill_bars = () => {
    return skills.map((skill, i) => {
      const value = skill.percent;
      return (
        <Grid
          item
          md={2}
          spacing={1}
          sm={12}
          key={i}
          className={classes.card_grid}
        >
          <Card>
            <CardContent>
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
                      style={{ width: "200px", height: "200px" }}
                      value={value}
                      text={`${roundedValue}%`}
                      styles={buildStyles({ pathTransition: "none" })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <Typography gutterBottom variant="h5" component="h2">
                {skill.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.main_grid}>
        <Skill_bars />
      </Grid>
    </div>
  );
};

export default Skills;
