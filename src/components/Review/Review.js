import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import accounting from "accounting";

import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";

export default function Review() {
  const [{ basket, shippingAddress, payment }] = useStateValue();

  // console.log(basket);
  // console.log(shippingAddress);
  // console.log(payment);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket.map((item) => (
          <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.title} secondary={item.quantity} />
            <Typography variant="body2">
              {accounting.formatMoney(item.price, "€")}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney(getBasketTotal(basket), "€")}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {shippingAddress.firstName} {shippingAddress.lastName}
          </Typography>
          <Typography gutterBottom>{shippingAddress.address1}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>{payment.nameOnCard}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payment.cardNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payment.expiryDate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{payment.cvv}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
