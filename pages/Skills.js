import React from "react";
import styles from "../styles/Skills.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  main_grid: {
    padding: "20px 40px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
      <Grid container>
        <Grid item xs={12} sm={12} md>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item md={8} className={classes.main_grid}>
          <div className={styles.container}>
            <Skill_bars />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md>
          <Paper className={classes.paper}>xs=3</Paper>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
