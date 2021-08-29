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
    [theme.breakpoints.down("sm")]: {
      "&:focus": {
        backgroundColor: "rgb(225, 181, 11)",
        color: "black",
      },
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
  const projects = [
    {
      name: "/POS_Laptop.png",
      title: "Point of Sales",
      techs: ["/ReactJs.png", "/NodeJs.png", "/mongodb.png", "/MaterialUI.png"],
      github: "https://github.com/Salman-Inayat/Point-Of-Sales",
      description:
        "An inventory management system with managing orders and data visualization",
    },
    {
      name: "/Portfolio_Laptop.png",
      title: "Portfolio",
      techs: ["/Nextjs.png", "/MaterialUI.png"],
      github: "https://github.com/Salman-Inayat/Portfolio",
      description: "My portfolio website to showcase my skills and projects.",
    },
    {
      name: "/Jehangiri_Laptop.png",
      title: "Jahangiri Associates",
      techs: ["/ReactJs.png", "/Bootstrap.png", "/NodeJs.png"],
      github: "https://github.com/Salman-Inayat/Jehangiri-Associates",
      description:
        "Company website for a buiding company developed with Reactjs and Nodejs",
    },
    {
      name: "/AtecMart_Laptop.png",
      title: "AtecMart",
      techs: ["/HTML.png", "/CSS.png", "/PHP.png", "/MySQL.png"],
      github: "https://github.com/Salman-Inayat/PHP-ecommerce-website",
      description:
        "An online shopping store developed with PHP and MySQl as database",
    },
    {
      name: "/Omnifood_Laptop.png",
      title: "OmniFood",
      techs: ["/HTML.png", "/Sass.png", "/JS.png"],
      github: "https://github.com/Salman-Inayat/PHP-ecommerce-website",
      description:
        "Company website for Omnifood restaurant developed with Sass styling",
    },
    {
      name: "/YelpCamp_Laptop.png",
      title: "YelpCamp",
      techs: [
        "/NodeJs.png",
        "/HTML.png",
        "/CSS.png",
        "/Expressjs.png",
        "/mongodb.png",
      ],
      github: "https://github.com/Salman-Inayat/YelpCamp",
      description:
        "A camping website to explore camping sites for your next adventure",
    },
    {
      name: "/Nexter_Laptop.png",
      title: "Nexter",
      techs: ["/HTML.png", "/Sass.png", "/JS.png"],
      github: "https://github.com/Salman-Inayat/Nexter",
      description: "Website where a user can view and buy different properties",
    },
    {
      name: "/Notour_Laptop.png",
      title: "Notour",
      techs: ["/HTML.png", "/CSS.png", "/JS.png"],
      github: "https://github.com/Salman-Inayat/Notour",
      description:
        "Explore nature by discovering different tours on the website ",
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
          {projects.map((project, i) => (
            <article className={styles.card} key={i}>
              <header className={styles.card_header}>
                <Image
                  src={project.name}
                  alt=""
                  width={300}
                  height={200}
                  // className={styles.pimage}
                />
              </header>

              <div className={styles.content}>
                <h2 className={styles.content_title}>{project.title}</h2>
                <p className={styles.content_description}>
                  {project.description}
                </p>
                <Link href={project.github} className={styles.button_link}>
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
                {project.techs.map((el, j) => {
                  return (
                    <CustomizedTooltip title={`${tooltip(el)}`} arrow key={j}>
                      <span className={local_styles.tech_images}>
                        <img width={40} height={40} alt="" src={el} />
                      </span>
                    </CustomizedTooltip>
                  );
                })}
              </div>
            </article>
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
