import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import withLayoutAdmin from "../../../../hoc/withLayoutAdmin";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "1rem",
    marginLeft: "2rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const ListProducts = () => {
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
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography align="center" gutterBottom variant="h4">
          Book List
        </Typography>
        <Button variant="contained">
          <Link to="/dashboard/products/create">Add New</Link>
        </Button>
      </div>

      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price (EUR)</TableCell>
            <TableCell>In Stock</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book._id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.description}</TableCell>
              <TableCell>{book.price}</TableCell>
              <TableCell>{book.in_stock}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <DeleteForeverIcon fontSize="medium" />
                </IconButton>
                <IconButton>
                  <EditIcon fontSize="medium" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default withLayoutAdmin(ListProducts);
