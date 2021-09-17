import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const headersData = [
  {
    label: "<Home/>",
    href: "/",
  },
  {
    label: "<Skills/>",
    href: "Skills",
  },
  {
    label: "<Experience/>",
    href: "Experience",
  },
  {
    label: "<Projects/>",
    href: "Projects",
  },
  {
    label: "<Contact/>",
    href: "Contact",
  },
];

const useStyles = makeStyles((theme) => ({
  header1: {
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "1rem 3rem 0.5rem 3rem",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  header2: {
    backgroundColor: "#1F2833",

    padding: "1rem 3rem 0.5rem 3rem",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "50px 30px",
    backgroundColor: "#1F2833",
    height: "100%",
  },
  linkContainer: {
    display: "flex",
  },
  header_links: {
    fontFamily: "'Handlee', cursive",
    transition: "all .3s ",
    "&:hover": {
      textDecoration: "none",
      borderBottom: "1px solid rgb(225, 181, 11)",
      transform: "scale(1.1)",
      backgroundColor: "transparent",
    },
    "&:active": {
      backgroundColor: "rgb(225, 181, 11)",
    },
  },
  header_link_text: {
    color: "rgb(225, 181, 11)",
    fontSize: "1.1rem",
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
  },
  drawer_links: {
    color: "rgb(225, 181, 11)",
    fontFamily: "'Handlee', cursive",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  drawer_link_text: {
    color: "rgb(225, 181, 11)",
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "15px 0px",
    [theme.breakpoints.up("lg")]: {
      // fontSize: "1.5rem",
    },
  },
  logoText: {
    fontSize: "2.6rem",
    margin: "0px",
    cursor: "pointer",
    color: "rgb(225, 181, 11)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.9rem",
      margin: "10px 0px",
    },
    // [theme.breakpoints.up("md")]: {
    //   fontSize: "3rem",
    // },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
    },
  },
  logoLink: {
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  menuIcon: {
    color: "rgb(225, 181, 11)",
    fontSize: "2rem",
  },
}));

export default function Header() {
  const classes = useStyles();

  const logoText = "< Salman Inayat />";
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const [header, setHeader] = useState(`${classes.header1}`);

  const listenScrollEvent = (event) => {
    if (window.scrollY > 50) {
      return setHeader(`${classes.header2}`);
    } else {
      return setHeader(`${classes.header1}`);
    }
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {femmecubatorLogo}
        <div className={classes.linkContainer} role="menuitemlist">
          {getMenuButtons()}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map((data, i) => {
      return (
        <Link
          href={data.href}
          key={i}
          passHref
          className={classes.drawer_links}
        >
          <MenuItem
            className={classes.drawer_link_text}
            onClick={() =>
              setState((prevState) => ({ ...prevState, drawerOpen: false }))
            }
          >
            {data.label}
          </MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link href="/" passHref className={classes.logoLink}>
      <h4 className={classes.logoText}>{logoText}</h4>
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map((data, i) => {
      return (
        <Link
          href={data.href}
          key={i}
          passHref
          className={classes.header_links}
        >
          <MenuItem className={classes.header_link_text}>{data.label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <div>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}
