import React from "react";
import cx from "clsx";
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "../styles/Projects.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import Typer from "../components/Typer";
import Fade from "react-reveal";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
    borderRadius: "5em",
    margin: "10px 15px 0px 0px",
    border: "1px solid rgb(225, 181, 11)",
    color: "rgb(225, 181, 11)",
    fontWeight: "bold",
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "rgb(225, 181, 11)",
      color: "black",
    },
  },
  githubIcon: {
    marginRight: ".2rem",
  },
  individualGrid: {
    margin: "30px 0px",
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "20px 0px",
      borderBottom: "1px solid #b3afaf",
    },
  },
  tech_images: {
    marginRight: "10px",
    borderRadius: "50px",
  },
  card_list: {
    display: "flex",
    padding: "3rem",
    overflowX: "scroll",
  },
  "card-list::-webkit-scrollbar": {
    width: "10px",
    height: "10px",
  },
  "card-list::-webkit-scrollbar-thumb": {
    background: "#201c29",
    borderRadius: "10px",
    boxShadow:
      "inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25)",
  },
  "card-list::-webkit-scrollbar-track": {
    background: "linear-gradient(90deg,#201c29,#201c29 1px,#17141d 0,#17141d)",
  },
  card: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    height: "350px",
    width: "400px",
    minWidth: "250px",
    padding: "1.5rem",
  },
  button_link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: "rgb(225, 181, 11)",
  },
  tooltip: {
    backgroundColor: "rgb(225, 181, 11)",
    color: "black",
    fontWeight: "bold",
  },
}));

function CustomizedTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

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
        "/NodeJs.png",
        "/HTML.png",
        "/GIT.png",
        "/GraphQL.png",
        "/mongodb.png",
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
        "/NodeJs.png",
        "/HTML.png",
        "/GIT.png",
        "/GraphQL.png",
        "/mongodb.png",
      ],
      github: "https://www.github.com",
    },
    {
      id: 5,
      name: "/Nexter_Laptop.png",
      title: "Demo App",
      techs: [
        "/NodeJs.png",
        "/HTML.png",
        "/GIT.png",
        "/GraphQL.png",
        "/mongodb.png",
      ],
      github: "https://www.github.com",
    },
    {
      id: 6,
      name: "/YelpCamp_Laptop.png",
      title: "Demo App",
      techs: [
        "/NodeJs.png",
        "/HTML.png",
        "/GIT.png",
        "/GraphQL.png",
        "/mongodb.png",
      ],
      github: "https://www.github.com",
    },
    {
      id: 7,
      name: "/Jehangiri_Laptop.png",
      title: "Demo App",
      techs: [
        "/NodeJs.png",
        "/HTML.png",
        "/GIT.png",
        "/GraphQL.png",
        "/mongodb.png",
      ],
      github: "https://www.github.com",
    },
  ];

  const local_styles = useStyles();
  let tooltip_text = "";

  const tooltip = (el) => {
    tooltip_text = el.substring(0, el.length - 4);
    tooltip_text = tooltip_text.substring(1);

    return tooltip_text;
  };

  return (
    <Grid container className={styles.grid_container}>
      <Grid item md={12}>
        <Typer text="Projects" />
      </Grid>
      <Grid item md={12}>
        <div className={styles.card_list}>
          {data.map((user, i) => (
            <Fade bottom key={i}>
              <article className={styles.card}>
                <header className={styles.card_header}>
                  <Image
                    src={user.name}
                    alt=""
                    width={450}
                    height={300}
                    className={styles.pimage}
                  />
                </header>

                <div className={styles.content}>
                  <h2 className={styles.content_title}>{user.title}</h2>
                  <p className={styles.content_description}>
                    A platform for automating data collection and reporting
                    throughout teams, operations and supply chains.
                  </p>
                  <Link href={user.github} className={classes.button_link}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={local_styles.button}
                    >
                      <GitHubIcon className={local_styles.githubIcon} />
                      GitHub
                    </Button>
                  </Link>
                  <br></br>
                  {user.techs.map((el, j) => {
                    return (
                      <CustomizedTooltip title={`${tooltip(el)}`} arrow key={j}>
                        <span className={local_styles.tech_images}>
                          <Image width={40} height={40} alt="" src={el} />
                        </span>
                      </CustomizedTooltip>
                    );
                  })}
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </Grid>
      <Grid item md={12}>
        <Typer text="/Projects" />
      </Grid>
    </Grid>
  );
};

export default Projects;
