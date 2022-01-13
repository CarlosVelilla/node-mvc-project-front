import React from "react";
import accounting from "accounting";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal, getBasketQuantity } from "../../context/reducer";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    marginTop: "1rem",
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="textSecondary" marginTop="1rem">
        Total items: {getBasketQuantity(basket)}
      </Typography>
      <Typography variant="h5" color="textSecondary" marginTop="1rem">
        {accounting.formatMoney(getBasketTotal(basket), "€")}
      </Typography>
      <Link to="/check-out">
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Checkout
        </Button>
      </Link>
    </div>
  );
};

export default Total;
