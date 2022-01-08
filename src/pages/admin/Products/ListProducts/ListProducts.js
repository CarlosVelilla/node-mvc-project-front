import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import withLayoutAdmin from "../../../../hoc/withLayoutAdmin";

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

// Generate Order Data
function createData(id, title, description, price, in_stock) {
  return { id, title, description, price, in_stock };
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", 20, 40),
  createData(1, "16 Mar, 2019", "Paul McCartney", 50, 16),
  createData(2, "16 Mar, 2019", "Tom Scholz", 10, 17),
  createData(3, "16 Mar, 2019", "Michael Jackson", 35, 46),
  createData(4, "15 Mar, 2019", "London, UK", 40, 25),
];

const ListProducts = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography align="center" gutterBottom variant="h4">
          Product List
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
            <TableCell>Price</TableCell>
            <TableCell>In Stock</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.in_stock}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <DeleteForeverIcon fontSize="large" />
                </IconButton>
                <IconButton>
                  <EditIcon fontSize="large" />
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
