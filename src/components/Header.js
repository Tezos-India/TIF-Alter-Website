import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import headerStyles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={headerStyles.appBarColor}>
        <Toolbar>
          <Hidden mdUp>
            <span className={headerStyles.appbarMagrinLeft}>
              <Button onClick={handleDrawerToggle}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                open={open}
                onClose={handleDrawerToggle}
                onOpen={handleDrawerToggle}
              >
                <List className={headerStyles.navHambergerWidth}>
                  <ListItem>Documentation</ListItem>
                  <ListItem>GitHub</ListItem>
                  <ListItem>
                    <Button className={headerStyles.mobileHeaderButton}>
                      Get in Touch
                    </Button>
                  </ListItem>
                </List>
              </SwipeableDrawer>
            </span>
          </Hidden>

          <ListItem className={headerStyles.logoStyle}>
            <img className={headerStyles.headerImg} src={logo} alt="" />
          </ListItem>

          <Hidden smDown>
            <span className={headerStyles.header}>
              <div className={headerStyles.headerLinks}>
                <ListItem>Documentation</ListItem>
                <ListItem>GitHub</ListItem>
                <ListItem>
                  <Button className={headerStyles.headerButton}>
                    Get in Touch
                  </Button>
                </ListItem>
              </div>
            </span>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
