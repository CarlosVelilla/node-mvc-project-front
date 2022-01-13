import * as React from "react";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import accounting from "accounting";
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
        <Button size="small">
          <Link to={`/${_id}`}>Learn more</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
