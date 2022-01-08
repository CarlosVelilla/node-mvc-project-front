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
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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
function createData(id, firstName, lastName, email, role) {
  return { id, firstName, lastName, email, role };
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", "Admin"),
  createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK", "Employee"),
  createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "Client"),
  createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "Client"),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "Client",
  ),
];

const ListUsers = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography align="center" gutterBottom variant="h4">
          User List
        </Typography>
        <Button variant="contained">
          <Link to="/dashboard/users/create">Add New</Link>
        </Button>
      </div>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>FistName</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
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

export default withLayoutAdmin(ListUsers);
