import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";

import withLayoutAdmin from "../../../../hoc/withLayoutAdmin";

const CreateProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [in_stock, setInStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add New Product
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h6">
                Upload Image Here (add later)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                required
                fullWidth
                id="title"
                label="Title"
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                fullWidth
                id="email"
                label="Description"
                name="description"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                fullWidth
                name="price"
                label="Price"
                type="number"
                id="price"
                autoComplete="price"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={in_stock}
                onChange={(e) => setInStock(e.target.value)}
                required
                fullWidth
                name="in_stock"
                label="In Stock"
                type="number"
                id="in_-stock"
                autoComplete="In Stock"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default withLayoutAdmin(CreateProducts);
