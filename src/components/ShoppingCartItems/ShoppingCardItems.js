import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useStateValue } from "../../context/StateProvider";

export default function ShoppingCartItems() {
  const [quantity, setQuantity] = useState("");
  const [{ basket }] = useStateValue();
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
              <Typography variant="h6">Amount</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  // value={item.quantity}
                  onChange={(e) => setQuantity(e.target.value)}
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
              <TableCell align="right">{`€${item.price}`}</TableCell>
              <TableCell align="right">
                <IconButton onClick>
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
