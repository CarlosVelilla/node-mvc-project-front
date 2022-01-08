import React from "react";
import accounting from "accounting";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

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

  return (
    <div className={classes.root}>
      <h6>Total items: 4</h6>
      <h6>{accounting.formatMoney(100, "€")}</h6>
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
