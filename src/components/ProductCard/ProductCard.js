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

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant="hs" color="textSecondary" marginTop="1rem">
            {accounting.formatMoney(50, "€")}
          </Typography>
        }
        title="Book"
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Genre: Sci-fi
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon fontSize="large" />
        </IconButton>
        <Button size="small">
          <Link to="/product">Learn more</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
