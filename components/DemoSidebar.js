import React from "react";
import clsx from "clsx";
import {
  List,
  ListItem,
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import fileSaver from "file-saver";
import Image from "next/image";
import Hidden from "@material-ui/core/Hidden";
import PropTypes from "prop-types";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 10000000,
    // position: "fixed",
    // transition: theme.transitions.create(["width", "margin"], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    flexShrink: "0",
  },
  // drawerPaper: {
  //   // position: "fixed",
  //   whiteSpace: "nowrap",
  //   width: drawerWidth,
  //   // flexShrink: "0",
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerPaperClose: {
  //   overflowX: "hidden",

  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   width: theme.spacing(7),
  //   [theme.breakpoints.up("sm")]: {
  //     width: theme.spacing(9),
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  drawerPaper: {
    width: drawerWidth,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  nav_drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
}));

const DemoSidebar = (props) => {
  console.log(props);
  const pages = [
    {
      title: "Home",
      href: "",
      icon: <DashboardIcon />,
    },
    {
      title: "Skills",
      href: "Skills",
      icon: <PeopleIcon />,
    },
    {
      title: "Projects",
      href: "Projects",
      icon: <PeopleIcon />,
    },
    {
      title: "Experience ",
      href: "Experience",
      icon: <PeopleIcon />,
    },
    {
      title: "Testimonials",
      href: "Testimonials",
      icon: <ShoppingBasketIcon />,
    },
    {
      title: "Get In Touch",
      href: "Contact",
      icon: <ShoppingBasketIcon />,
    },
  ];

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { window } = props;
  const theme = useTheme();
  // const handleClick = () => {
  //   if (open) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const saveFile = () => {
    fileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/public/Salman_Inayat_Resume.pdf",
      "MyCV.pdf"
    );
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        // className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar>
          <IconButton
            // edge="start"
            // color="inherit"
            // aria-label="open drawer"
            // onClick={handleClick}
            // className={clsx(
            //   classes.menuButton,
            //   open && classes.menuButtonHidden
            // )}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>

          {/* <Image src="/salman_inayat.png" width={200} height={70} alt="logo" /> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.nav_drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            // className={classes.drawer}
            // variant="temporary"
            // classes={{
            //   paper: clsx(
            //     classes.drawerPaper,
            //     !open && classes.drawerPaperClose
            //   ),
            // }}
            // open={open}
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {/* <div className={classes.toolbarIcon}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleClick}
              >
                <ChevronLeftIcon />
              </IconButton>
            </div> */}
            <div className={classes.toolbar} />
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
              {pages.map((page, i) => (
                <Link href={page.href} key={i}>
                  <ListItem key={page.title} button>
                    <Button>
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      <ListItemText primary={page.title} />
                    </Button>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

DemoSidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DemoSidebar;
