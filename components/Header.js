import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Skills",
    href: "Skills",
  },
  {
    label: "Experience",
    href: "Experience",
  },
  {
    label: "Projects",
    href: "Projects",
  },
  {
    label: "Contact",
    href: "Contact",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
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
    padding: "20px 30px",
  },
  linkContainer: {
    display: "flex",
  },
  header_links: {
    color: "#ffffff",
    // textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

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

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {femmecubatorLogo}
        <div className={classes.linkContainer}>{getMenuButtons()}</div>
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
          <MenuIcon />
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
        <Link href={data.label} key={i}>
          <MenuItem>{data.label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Image src={"/salman_inayat.png"} alt="" width={200} height={70} />
  );

  const getMenuButtons = () => {
    return headersData.map((data, i) => {
      return (
        <Link href={data.href} key={i} className={classes.header_links}>
          <MenuItem>{data.label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <div>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}
