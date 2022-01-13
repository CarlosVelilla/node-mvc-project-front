import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo.png";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "1rem",
  },
  image: {
    marginRight: "10px",
    height: "2rem",
  },
});

const NavBarAdmin = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const signOutHandler = () => {
    let keysToRemove = ["authToken", "userData"];
    keysToRemove.forEach((k) => localStorage.removeItem(k));

    navigate("/sign-in");
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/dashboard">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} alt="logo" className={classes.image} />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={signOutHandler}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarAdmin;
