import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.png";
import { makeStyles } from "@mui/styles";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Badge from "@mui/material/Badge";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
// import { actionTypes } from "../../context/reducer";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  image: {
    marginRight: "10px",
    height: "2rem",
  },
  button: {
    marginLeft: "1rem",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [{ basket }] = useStateValue();
  let navigate = useNavigate();

  let authToken = localStorage.getItem("authToken");

  const signOutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
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
          <Typography
            variant="h6"
            component="p"
            sx={{ flexGrow: 1 }}
            color="textPrimary"
          >
            Hello Guest
          </Typography>
          <div className={classes.button}>
            {authToken ? (
              <Button
                variant="outlined"
                color="inherit"
                onClick={signOutHandler}
              >
                <strong>Sign Out</strong>
              </Button>
            ) : (
              <Link to="/sign-in">
                <Button variant="outlined" color="inherit">
                  <strong>Sign In</strong>
                </Button>
              </Link>
            )}
            <Link to="/shopping-cart">
              <IconButton aria-label="show cart items">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCartCheckoutIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
