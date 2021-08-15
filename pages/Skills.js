import React from "react";
import styles from "../styles/Skills.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../components/ChangingProgressProvider";

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
}));

const Skills = () => {
  const classes = useStyles();

  const skills = [
    {
      name: "HTML",
      percent: "95%",
    },
    {
      name: "CSS",
      percent: "90%",
    },
    {
      name: "JS",
      percent: "95%",
    },
    {
      name: "React.js",
      percent: "80%",
    },
    {
      name: "Node.js",
      percent: "70%",
    },
    {
      name: "Mongodb",
      percent: "70%",
    },
  ];

  const percentage = 66;

  const Skill_bars = () => {
    return skills.map((skill, i) => {
      return (
        <div className={styles.skills} key={i}>
          <span className={styles.name}>{skill.name}</span>
          <div className={styles.percent}>
            <div
              className={styles.progress}
              style={{ width: `${skill.percent}` }}
            ></div>
          </div>
          <span className={styles.value}>{skill.percent}</span>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.main_grid}>
        <Grid item md={6} className={classes.main_grid}>
          <div className={styles.container}>
            <Skill_bars />
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <ChangingProgressProvider values={[0, 80]}>
            {(percentage) => (
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            )}
          </ChangingProgressProvider>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
