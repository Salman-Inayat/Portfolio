import React from "react";
import cx from "clsx";
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "0px",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    backgroundColor: "red",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  grid_container: {
    padding: "30px",
  },
  grid: {
    margin: "30px",
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "90%",
      marginLeft: spacing(3),
      marginTop: spacing(-6),
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fffffff 0%, #ffffff 74%)",
      borderRadius: spacing(2),
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  button: {
    margin: spacing(1),
  },
  tech_images:{
    width:'48px',
    height:'48px',
    margin:'0px 5px'
  },
  github_img:{
      height:'50px'
  }
}));

const Projects = () => {
  const projects = [
    {
      id: 1,
      image_url: "POS.png",
      title: "Point of Sales",
      techs: ["PHP.png", "Node.png", "GIT.png"],
    },
    {
      id: 2,
      image_url: "POZ.png",
      title: "Point of Sales",
      techs: ["PHP.png", "Node.png", "GIT.png"],
    },
  ];

  const data = [
    {
      id: 1,
      name: "/POS.png",
      title: "Point of Sales",
      techs: ["/PHP.png", "/MySQL.png"],
      github:"https://github.com/Salman-Inayat/Point-Of-Sales"
    },
    {
      id: 2,
      name: "/MySQL.png",
      title: "Demo App",
      techs: ["/nodejs.png", "/HTML.png", "GIT.png", "GraphQL.png", "mongodb.png"],
      github:"https://www.github.com"
    },
    {
      id: 3,
      name: "/JS.png",
      title: "Jehangiri",
      techs: ["/JS.png", "/CSS.png"],
      github:"https://www.github.com"
    },
  ];

  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  return (
    // <Grid container>
    //   {data.map((p) => {
    //     <Grid item md={6} sm={12}>
    //       <Card className={cx(styles.root, shadowStyles.root)} key={p.id}>
    //         <CardMedia className={styles.media} image={p.name} />
    //         <CardContent>
    //           <TextInfoContent
    //             useStyles={useBlogTextInfoContentStyles}
    //             // classes={contentStyles}
    //             //   overline={"28 MAR 2019"}
    //             heading={"Point of sales application"}
    //             body={"Technologies Used"}
    //           />
    //           {/* {project.techs.map((p) => {
    //               <img src={p.techs} alt="techs"></img>;
    //             })} */}
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   })}
    // </Grid>

    <Grid container className={styles.grid_container}>
      {data.map((user, i) => (
        <Grid item md={5} className={styles.grid}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardActionArea>
              <CardMedia
                className={styles.media}
                image={user.name}
                title="Contemplative Reptile"
              />
              <Grid container spacing={3}>
                <Grid item md={5}>
                  <CardContent>
                    <TextInfoContent
                      useStyles={useBlogTextInfoContentStyles}
                      classes={contentStyles}
                      overline={"Full Stack"}
                      heading={user.title}
                      // body={"Technologies Used"}
                    />
                    {/* <Button
                      variant="contained"
                      color="secondary"
                      className={styles.button}s
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button> */}
                    <Link href={user.github}><img src="Github.png" className={styles.github_img} /></Link>
                  </CardContent>
                </Grid>
                <Grid item md={7}>
                <CardContent>
                  <Typography gutterBottom variant="body2" component="p">
                    Technologies Used
                  </Typography>
                  {
                      user.techs.map((el, j) => (
                        <img className={styles.tech_images} key={j} src={el} />
                      ))
                  }
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
