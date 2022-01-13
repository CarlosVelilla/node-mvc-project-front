import React, { useRef } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

export default function PaymentForm() {
  const nameOnCardRef = useRef();
  const cardNumberRef = useRef();
  const expiryDateRef = useRef();
  const cvvRef = useRef();

  const [, dispatch] = useStateValue();

  const addToOrder = () => {
    const nameOfCard = nameOnCardRef.current.value;
    const cardNumber = cardNumberRef.current.value;
    const expiryDate = expiryDateRef.current.value;
    const cvv = cvvRef.current.value;

    dispatch({
      type: actionTypes.SET_PAYMENT_DATA,
      data: {
        nameOfCard,
        cardNumber,
        expiryDate,
        cvv,
      },
    });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            inputRef={nameOnCardRef}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            inputRef={cardNumberRef}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            inputRef={expiryDateRef}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            inputRef={cvvRef}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
        <Button onClick={addToOrder} sx={{ mt: 3, ml: 1 }}>
          <strong>Save Data</strong>
        </Button>
      </Grid>
    </>
  );
}
