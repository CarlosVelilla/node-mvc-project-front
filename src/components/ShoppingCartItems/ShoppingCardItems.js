import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import { v4 as uuid } from "uuid";

export default function ShoppingCartItems() {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = (id) => {
    // console.log("delete");
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });
  };

  const testItem = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Title</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Quantity</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Image</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Price</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Amount</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item) => (
            <TableRow key={uuid()}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <TextField
                  value={item.quantity}
                  type="number"
                  onChange={(e) => testItem(e)}
                />
              </TableCell>
              <TableCell>
                <CardMedia
                  component="img"
                  height="100"
                  image={item.imageUrl}
                  alt="Product"
                />
              </TableCell>
              <TableCell align="right">€{item.price}</TableCell>
              <TableCell align="right">€{item.price * item.quantity}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => removeItem(item.orderId)}>
                  <DeleteForeverIcon fontSize="large" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
