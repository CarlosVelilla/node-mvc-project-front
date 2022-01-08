import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import ImageGallery from "react-image-gallery";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import withLayoutClient from "../../../hoc/withLayoutClient";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "2rem",
    marginLeft: "10rem",
    marginRight: "10rem",
  },
});

const currencies = [
  {
    value: "30ml",
    label: "30ml",
  },
  {
    value: "50ml",
    label: "50ml",
  },
  {
    value: "100ml",
    label: "100ml",
  },
];

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ProductDetails = () => {
  const classes = useStyles();

  const [size, setSize] = React.useState("30ml");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  // const [Images, setImages] = useState([]);
  // useEffect(() => {
  //   if (images.length > 0) {
  //     let imagesCollection = [];
  //     // eslint-disable-next-line array-callback-return
  //     images.map((item) => {
  //       imagesCollection.push({
  //         original: item.original,
  //         thumbnail: item.thumbnail,
  //       });
  //     });
  //     setImages(imagesCollection);
  //   }
  // }, []);
  return (
    <Box className={classes.root}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={6}>
          <ImageGallery items={images} />
        </Grid>
        <Grid item xs={6} layout={"row"} spacing={10}>
          <Grid>
            <div style={{ height: "100%" }}>
              <Typography variant="h4" color="text.secondary" compo>
                Calendula Deep Cleansing
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="body1" color="text.secondary" compo>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="body1" color="text.secondary" compo>
                {accounting.formatMoney(50, "€")}
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="body1" color="text.secondary" compo>
                In stock : 30
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <Typography variant="h6" color="text.primary" compo>
                CHOOSE THE SIZE
              </Typography>
            </div>
          </Grid>
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <TextField
                id="outlined-select-currency"
                select
                // label="Select"
                value={size}
                onChange={handleChange}
                helperText="Please select your size"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>

          <Divider light />
          <Grid>
            <div style={{ height: "100%", paddingTop: 10 }}>
              <IconButton aria-label="Add to Cart">
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
