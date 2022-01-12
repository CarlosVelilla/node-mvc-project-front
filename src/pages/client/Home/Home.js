import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import withLayoutClient from "../../../hoc/withLayoutClient";
import ProductCard from "../../../components/ProductCard";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "3rem",
  },
});

const Home = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    axios.get("http://localhost:4000/api/book/").then((response) => {
      if (response.data.success) {
        setBooks(response.data.books);
      } else {
        alert("Fail to fetch books data");
      }
    });
  };

  return (
    <Box className={classes.root}>
      {books && (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book._id}>
              <ProductCard key={book._id} book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default withLayoutClient(Home);
