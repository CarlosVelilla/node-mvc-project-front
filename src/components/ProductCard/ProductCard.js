import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import accounting from "accounting";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ book: { title, imageUrl, price, _id } }) {
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
        {/* <IconButton aria-label="Add to Cart" onClick>
          <AddShoppingCartIcon fontSize="large" />
        </IconButton> */}
        <Button size="small">
          <Link to={`/${_id}`}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
