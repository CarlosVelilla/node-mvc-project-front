import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useNavigate } from "react-router-dom";
import withLayoutAdmin from "../../../../hoc/withLayoutAdmin";
import axios from "axios";

const CreateProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [in_stock, setInStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "http://localhost:4000/api/book/",
        {
          imageUrl,
          title,
          description,
          price,
          in_stock,
        },
        config,
      );
      navigate("/dashboard/products");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Add New Product
        </Typography>
        {error && <span>{error}</span>}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="image-url"
                onChange={(e) => setImageUrl(e.target.value)}
                name="imageUrl"
                required
                fullWidth
                id="imageUrl"
                label="Image Url"
                value={imageUrl}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="title"
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
                id="in_stock"
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
