import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  Divider,
  Box,
  CardMedia,
} from "@mui/material";
import accounting from "accounting";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import withLayoutClient from "../../../hoc/withLayoutClient";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "2rem",
    marginTop: "2rem",
    marginLeft: "4rem",
    marginRight: "4rem",
  },
});

const version = [
  {
    value: "hard_cover",
    label: "Hard Cover",
  },
  {
    value: "soft_back",
    label: "Soft Back",
  },
];

const ProductDetails = () => {
  const classes = useStyles();
  const [size, setSize] = useState("hard_cover");
  const [Product, setProduct] = useState({});
  const id = useParams().productId;
  const [, dispatch] = useStateValue();
  const quantityRef = useRef();
  const typeRef = useRef();

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/book/${id}`)
      .then((response) => setProduct(response.data.data[0]));
  }, [id]);

  const addToBasket = () => {
    const { _id, title, imageUrl, price } = Product;
    const quantity = parseInt(quantityRef.current.value);
    const type = typeRef.current.value;
    const orderId = uuid();
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        orderId,
        _id,
        title,
        imageUrl,
        price,
        quantity,
        type,
      },
    });
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={8} container spacing={2}>
          <CardMedia
            component="img"
            image={Product.imageUrl}
            alt="Book Image"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Grid>
            <div style={{ height: "100%" }}>
              <Typography variant="h4" color="text.secondary" compo>
                {Product.title}
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="body1" color="text.secondary" compo>
                {Product.description}
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="body1" color="text.secondary" compo>
                <strong>{accounting.formatMoney(Product.price, "€")}</strong>
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="h7" color="text.primary" compo>
                PLEASE CHOOSE THE QUANTITY
              </Typography>
            </div>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <TextField
                id="outlined-select-version"
                type="number"
                helperText="Please select the quantity"
                inputRef={quantityRef}
              />
            </div>
          </Grid>

          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="h7" color="text.primary" compo>
                CHOOSE THE TYPE
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <TextField
                id="outlined-select-type"
                select
                value={size}
                onChange={handleChange}
                helperText="Please select your version"
                inputRef={typeRef}
              >
                {version.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>

          <Divider />
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <IconButton aria-label="Add to Cart" onClick={addToBasket}>
                <AddShoppingCartIcon fontSize="large" />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withLayoutClient(ProductDetails);
