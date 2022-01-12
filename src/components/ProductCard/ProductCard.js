import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import accounting from "accounting";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

export default function ProductCard({ book: { title, imageUrl, price, _id } }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log("add");
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        _id,
        title,
        imageUrl,
        price,
      },
    });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant="hs" color="textSecondary" marginTop="1rem">
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title="Book"
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket}>
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
        <Button size="small">
          <Link to={`/${_id}`}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
