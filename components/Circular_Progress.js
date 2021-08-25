import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../node_modules/react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "../node_modules/d3-ease/src/index";
import { CircleProgress } from "react-gradient-progress";

function Circular_Progress() {
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
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={value}
          duration={1.4}
          key={i}
          easingFunction={easeQuadInOut}
        >
          {(value, a) => {
            return (
              <CircularProgressbar
                style={{ width: "200px", height: "200px" }}
                value={value}
                key={a}
                text={`${value}%`}
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        // <CircleProgress percentage={skill.percent} strokeWidth={8} key={i} />
      );
    });
  };

  return <Skill_bars />;
}

export default Circular_Progress;
