import React from "react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
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
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>Skills </h1>
        <Skill_bars />
      </div>
    </div>
  );
};

export default Skills;
