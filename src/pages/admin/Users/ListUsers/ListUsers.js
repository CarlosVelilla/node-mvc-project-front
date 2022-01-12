import React, { useEffect, useState } from "react";
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

const ListUsers = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios.get("http://localhost:4000/api/auth/user").then((response) => {
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        alert("Fail to fetch books data");
      }
    });
  };

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
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
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

export default withLayoutAdmin(ListUsers);
