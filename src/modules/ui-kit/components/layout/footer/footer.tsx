import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  colors
} from "@material-ui/core";
import { Home, DirectionsRun, TrendingUp } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0
  }
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Train" icon={<DirectionsRun />} />
      <BottomNavigationAction label="Statistic" icon={<TrendingUp />} />
    </BottomNavigation>
  );
};
