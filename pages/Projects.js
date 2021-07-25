import React from "react";
import cx from "clsx";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "0px",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    backgroundColor:'red',
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
  grid:{
    padding:"50px"
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
      borderRadius: spacing(2), // 16
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

const Projects = React.memo(function BlogCard() {
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  return (
    <Grid container spacing={0} className={styles.grid}>
      <Grid item md={6} sm={12}>
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={
              "/POS.png"
            }
          />
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
            //   overline={"28 MAR 2019"}
              heading={"Point of Sales Web Application"}
              body={
                "Technologies Used"
              }
            />
                <img src="PHP.png"></img>
            {/* <Button className={buttonStyles}>Github</Button> */}
          </CardContent>
        </Card>
      </Grid>

      
    </Grid>
  );
});

export default Projects;
