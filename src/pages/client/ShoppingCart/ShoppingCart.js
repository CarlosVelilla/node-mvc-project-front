import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import withLayoutClient from "../../../hoc/withLayoutClient";
import TotalAmount from "../../../components/TotalAmount";
import ShoppingCartItems from "../../../components/ShoppingCartItems";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "2rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
});

const ShoppingCart = () => {
  const classes = useStyles();

  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <ShoppingCartItems />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <TotalAmount />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withLayoutClient(ShoppingCart);
