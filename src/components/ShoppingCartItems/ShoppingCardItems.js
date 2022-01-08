import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";

// Generate Order Data
function createData(title, image, quantity, amount) {
  return { title, image, quantity, amount };
}

const basket = [
  createData(
    "Tupelo, MS",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/328c107b-0189-4707-8c80-fdd7b34af8ae/zoomx-vaporfly-next-2-zapatillas-de-competicion-asfalto-PNrPZp.png",
    "4",
    312.44,
  ),
  createData(
    "London, UK",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/437cc67c-8cae-4a95-98fa-2c5583f47e65/air-more-uptempo-zapatillas-nino-a-TrRpmG.png",
    "3",
    866.99,
  ),
  createData(
    "Boston, MA",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ebad848a-13b1-46d5-a85e-49b4b6a4953c/air-force-1-le-zapatillas-nino-a-D59pRJ.png",
    "2",
    100.81,
  ),
  createData(
    "Gary, IN",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3270b875-2d46-4000-ab1d-e72864df223a/air-jordan-1-mid-zapatillas-QJTvQh.png",
    "2",
    654.39,
  ),
];

export default function ShoppingCartItems() {
  // const [email, setQuantity] = React.useState("");
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
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.quantity}
                  // onChange={(e) => setQuantity(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <CardMedia
                  component="img"
                  height="100"
                  image={item.image}
                  alt="Product"
                />
              </TableCell>
              <TableCell align="right">{`€${item.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
