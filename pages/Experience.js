import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import style from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={style.container}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: "#9b9ea2", color: "#fff" }}
          contentArrowStyle={{ borderRight: "15px solid  #9b9ea2" }}
          date="April,2021 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GitHubIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            IoT Lab SEECS, NUST
          </h4>
          <p>
            Working on a government funded project to detect rust disease in
            wheat plant and developing a web portal to visualize the data.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March, 2021 - Present"
          contentStyle={{ backgroundColor: "#9b9ea2", color: "#fff" }}
          contentArrowStyle={{ borderRight: "15px solid  #9b9ea2" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GitHubIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Open-Source Contributor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Navidrome Music Server
          </h4>
          <p>Removed bugs and implemented new features in the software.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November, 2020 - February, 2021"
          contentStyle={{ backgroundColor: "#9b9ea2", color: "#fff" }}
          contentArrowStyle={{ borderRight: "15px solid  #9b9ea2" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GitHubIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Director Web &#38; IT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            IEEE SEECS, NUST
          </h4>
          <p>
            Worked on IEEE SEECS website which secured 3rd position in Asian and
            Pacific region
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August, 2020 - October, 2020"
          contentStyle={{ backgroundColor: "#9b9ea2", color: "#fff" }}
          contentArrowStyle={{ borderRight: "15px solid  #9b9ea2" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GitHubIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Web Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hactric Solutions
          </h4>
          <p>
            Developed websites for the clients and improved existing software
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<GitHubIcon />}
        />{" "}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
