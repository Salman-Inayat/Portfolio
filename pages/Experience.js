import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import classes from "../styles/Experience.module.css";
import Typer from "../components/Typer";
import Grid from "@material-ui/core/Grid";

const data = [
  {
    title: "Research Assistant",
    subtitle: "IoT Lab SEECS, NUST",
    description:
      "Working on a government funded project to detect rust disease in wheat leaves and developing a web portal to visualize the data.",
    date: "April,2021 - Present",
  },
  {
    title: "Open-Source Contributor",
    subtitle: "Navidrome Music Server",
    description: "Removed bugs and implemented new features in the software.",
    date: "March, 2021 - Present",
  },
  {
    title: "Director Web & IT",
    subtitle: "IEEE SEECS, NUST",
    description:
      "Worked on IEEE SEECS website which secured 3rd position in Asian and Pacific region",
    date: "November, 2020 - February, 2021",
  },
  {
    title: "Front End Web Developer Intern",
    subtitle: "Hactric Solutions",
    description:
      "Developed websites for the clients and improved existing software",
    date: "August, 2020 - October, 2020",
  },
];

const Experience = () => {
  return (
    <Grid className={classes.container} container>
      <Grid item md={12}>
        <Typer text="Experience" />
      </Grid>
      <Grid item md={12}>
        <VerticalTimeline>
          {data.map((item, i) => {
            return (
              <VerticalTimelineElement
                key={i}
                className={classes.vertical_timeline_element_work}
                contentStyle={{
                  backgroundColor: "rgb(83, 86, 91)",
                  color: "#fff",
                  border: "2px solid rgb(225, 181, 11)",
                  boxShadow: "none",
                  borderRadius: "10px",
                }}
                contentArrowStyle={{
                  borderRight: "15px solid  rgb(225, 181, 11)",
                }}
                date={item.date}
                dateClassName={classes.date}
                iconStyle={{
                  background: "rgb(225, 181, 11)",
                  color: "rgb(31, 40, 51)",
                }}
                icon={<GitHubIcon />}
              >
                <h3 className={classes.vertical_timeline_element_title}>
                  {item.title}
                </h3>
                <h4 className={classes.vertical_timeline_element_subtitle}>
                  {item.subtitle}
                </h4>
                <p
                  className={classes.vertical_timeline_element_description}
                  style={{
                    fontSize: "1rem",
                    fontWeight: "300",
                    letterSpacing: "1px",
                  }}
                >
                  {item.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: "rgb(225, 181, 11)",
              color: "rgb(31, 40, 51)",
            }}
            icon={<GitHubIcon />}
          />{" "}
        </VerticalTimeline>
      </Grid>
      <Grid item md={12}>
        <Typer text="/Experience" />
      </Grid>
    </Grid>
  );
};

export default Experience;
