import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CardMedia,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import { v4 as uuid } from "uuid";

export default function ShoppingCartItems() {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = (id) => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });
  };

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="hs">
                <strong>Title</strong>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="hs">
                <strong>Quantity</strong>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="hs">
                <strong>Image</strong>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="hs">
                <strong>Price</strong>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="hs">
                <strong>Amount</strong>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="hs">
                <strong>Action</strong>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item) => (
            <TableRow key={uuid()}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <TextField value={item.quantity} type="number" />
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
