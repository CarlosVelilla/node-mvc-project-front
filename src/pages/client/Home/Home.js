import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import withLayoutClient from "../../../hoc/withLayoutClient";
import ProductCard from "../../../components/ProductCard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "3rem",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default withLayoutClient(Home);
