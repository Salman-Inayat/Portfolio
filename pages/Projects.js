import React from "react";
import cx from "clsx";
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import Styles from "../styles/Projects.module.css";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
    borderRadius: "5em",
  },
  githubIcon: {
    marginRight: "10px",
  },
  individualGrid: {
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
  },
}));

const Projects = () => {
  const data = [
    {
      id: 1,
      name: "/POS_Laptop.png",
      title: "Point of Sales",
      techs: ["/PHP.png", "/MySQL.png"],
      github: "https://github.com/Salman-Inayat/Point-Of-Sales",
    },
    {
      id: 2,
      name: "/AtecMart_Laptop.png",
      title: "Demo App",
      techs: [
        "/nodejs.png",
        "/HTML.png",
        "GIT.png",
        "GraphQL.png",
        "mongodb.png",
      ],
      github: "https://www.github.com",
    },
    {
      id: 3,
      name: "/Omnifood_Laptop.png",
      title: "Jehangiri",
      techs: ["/JS.png", "/CSS.png"],
      github: "https://www.github.com",
    },
    {
      id: 4,
      name: "/Notour_Laptop.png",
      title: "Demo App",
      techs: [
        "/nodejs.png",
        "/HTML.png",
        "GIT.png",
        "GraphQL.png",
        "mongodb.png",
      ],
      github: "https://www.github.com",
    },
    {
      id: 5,
      name: "/Nexter_Laptop.png",
      title: "Demo App",
      techs: [
        "/nodejs.png",
        "/HTML.png",
        "GIT.png",
        "GraphQL.png",
        "mongodb.png",
      ],
      github: "https://www.github.com",
    },
    {
      id: 6,
      name: "/YelpCamp_Laptop.png",
      title: "Demo App",
      techs: [
        "/nodejs.png",
        "/HTML.png",
        "GIT.png",
        "GraphQL.png",
        "mongodb.png",
      ],
      github: "https://www.github.com",
    },
    {
      id: 7,
      name: "/Jehangiri_Laptop.png",
      title: "Demo App",
      techs: [
        "/nodejs.png",
        "/HTML.png",
        "GIT.png",
        "GraphQL.png",
        "mongodb.png",
      ],
      github: "https://www.github.com",
    },
  ];

  const local_styles = useStyles();

  return (
    <Grid container className={Styles.grid_container}>
      {data.map((user, i) => (
        <Grid item md={12} className={local_styles.individualGrid} key={i}>
          <Grid item md={5} sm={12}>
            <Image src={user.name} alt="" className={Styles.pimage} />
          </Grid>
          <Grid item md={1} xs={12}></Grid>
          <Grid item md={5} xs={12}>
            <div className={Styles.content}>
              <h2>{user.title}</h2>
              <p>
                A platform for automating data collection and reporting
                throughout teams, operations and supply chains.
              </p>
              <Link href={user.github}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={local_styles.button}
                >
                  <GitHubIcon className={local_styles.githubIcon} />
                  View on GitHub
                </Button>
              </Link>
              <br></br>
              {user.techs.map((el, j) => (
                <Image className={Styles.tech_images} key={j} src={el} />
              ))}
            </div>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
