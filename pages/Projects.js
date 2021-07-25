import React from "react";
import cx from "clsx";
import { Grid } from "@material-ui/core";
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
grid:{
    margin:'10px'
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
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
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
    { id: 1, name: "/POS.png", title: "Point of Sales", techs: ["PHP.png", "Node.png", "GIT.png"]},
    { id: 2, name: "/MySQL.png", title: "Demo App", techs: ["PHP.png", "Node.png", "GIT.png"]},
    { id: 3, name: "/JS.png", title: "Jehangiri", techs: ["PHP.png", "Node.png", "GIT.png"]},
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
      {data.map((user) => (
        <Grid item md={6} className={styles.grid}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardActionArea>
              <CardMedia
                className={styles.media}
                image={user.name}
                title="Contemplative Reptile"
              />
              <CardContent>
                <TextInfoContent
                  useStyles={useBlogTextInfoContentStyles}
                  classes={contentStyles}
                    overline={"28 MAR 2019"}
                  heading={user.title}
                  body={"Technologies Used"}
                />
                {user.techs.map((p) => {
                  <img src={p} alt="techs"></img>;
                  {console.log(p)}
                })}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
