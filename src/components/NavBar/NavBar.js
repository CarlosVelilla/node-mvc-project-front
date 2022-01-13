import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import logo from "../../assets/logo.png";
import { makeStyles } from "@mui/styles";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { getBasketQuantity } from "../../context/reducer";

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
    let keysToRemove = ["authToken", "userData"];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
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
                <Badge
                  badgeContent={getBasketQuantity(basket)}
                  color="secondary"
                >
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
