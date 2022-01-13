import React, { useRef } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

export default function AddressForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();
  const cityRef = useRef();
  const regionRef = useRef();
  const zipRef = useRef();
  const countryRef = useRef();

  const [, dispatch] = useStateValue();

  const addToOrder = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const address1 = address1Ref.current.value;
    const address2 = address2Ref.current.value;
    const city = cityRef.current.value;
    const region = regionRef.current.value;
    const zip = zipRef.current.value;
    const country = countryRef.current.value;

    dispatch({
      type: actionTypes.SET_SHIPPING_DATA,
      data: {
        firstName,
        lastName,
        address1,
        address2,
        city,
        region,
        zip,
        country,
      },
    });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            inputRef={firstNameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            inputRef={lastNameRef}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            inputRef={address1Ref}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            inputRef={address2Ref}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            inputRef={cityRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            inputRef={regionRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            inputRef={zipRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            inputRef={countryRef}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
        <Button onClick={addToOrder} sx={{ mt: 3, ml: 1 }}>
          <strong>Save Data</strong>
        </Button>
      </Grid>
    </>
  );
}
