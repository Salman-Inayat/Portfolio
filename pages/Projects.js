import React from "react";
import cx from "clsx";
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "../styles/Projects.module.css";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
    borderRadius: "5em",
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
    // <Grid container className={Styles.grid_container}>
    //   {data.map((user, i) => (
    //     <Grid item md={12} className={local_styles.individualGrid} key={i}>
    //       <Grid
    //         item
    //         xs={12}
    //         sm={8}
    //         md={6}
    //         justifyContent="center"
    //         alignItems="center"
    //       >
    //         <Image
    //           src={user.name}
    //           alt=""
    //           width={450}
    //           height={300}
    //           className={Styles.pimage}
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={4} md={6}>
    //         <div className={Styles.content}>
    //           <h2>{user.title}</h2>
    //           <p>
    //             A platform for automating data collection and reporting
    //             throughout teams, operations and supply chains.
    //           </p>
    //           <Link href={user.github}>
    //             <Button
    //               variant="outlined"
    //               color="primary"
    //               className={local_styles.button}
    //             >
    //               <GitHubIcon className={local_styles.githubIcon} />
    //               GitHub
    //             </Button>
    //           </Link>
    //           <br></br>
    //           {user.techs.map((el, j) => (
    //             <span className={local_styles.tech_images} key={j}>
    //               <Image width={40} height={40} alt="" src={el} />
    //             </span>
    //           ))}
    //         </div>
    //       </Grid>
    //     </Grid>
    //   ))}
    // </Grid>
    <div className={styles.card_list}>
      {data.map((user, i) => (
        <article className={styles.card} key={i}>
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
            <h2>{user.title}</h2>
            <p>
              A platform for automating data collection and reporting throughout
              teams, operations and supply chains.
            </p>
            <Link href={user.github}>
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
                <Tooltip title={`${tooltip(el)}`} arrow key={j}>
                  <span className={local_styles.tech_images}>
                    <Image width={40} height={40} alt="" src={el} />
                  </span>
                </Tooltip>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
