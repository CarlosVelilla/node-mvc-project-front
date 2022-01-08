import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
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
          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarAdmin;
