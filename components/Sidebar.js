import React from "react";
import { List, ListItem, Button, Grid, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import SidebarStyle from "../styles/Sidebar.module.css";
import Link from "next/link";



function Sidebar(props) {
  const pages = [
    {
      title: "Home",
      href: "/",
      icon: <DashboardIcon />,
    },
    {
      title: "About Me",
      href: "/AboutMe",
      icon: <PeopleIcon />,
    },
    {
      title: "Skills",
      href: "/Skills",
      icon: <PeopleIcon />,
    },
    {
      title: "Projects",
      href: "/Projects",
      icon: <PeopleIcon />,
    },
    {
        title: "Experience ",
        href: "/Experience",
        icon: <PeopleIcon />,
      },
    {
      title: "Testimonials",
      href: "/Testimonials",
      icon: <ShoppingBasketIcon />,
    },
    {
      title: "Get In Touch",
      href: "/Contact",
      icon: <ShoppingBasketIcon />,
    },
  ];

  return (
    <div className={SidebarStyle.sidebar}>
      <Grid item md={3}>
        <List component="nav" aria-label="main mailbox folders" className={SidebarStyle.sidebar_list}>
          {pages.map((page) => (
            <ListItem key={page.title} button>
              <Link href={page.href}>
                <Button>
                <ListItemIcon>
                    {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.title} />
                </ Button>
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </div>
  );
}


export default Sidebar;
