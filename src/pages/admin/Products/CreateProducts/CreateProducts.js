import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import Dropzone from "react-dropzone";
import PlusOneRoundedIcon from "@mui/icons-material/PlusOneRounded";

import withLayoutAdmin from "../../../../hoc/withLayoutAdmin";

const CreateProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [in_stock, setInStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onDrop = (files) => {
    let formData = new FormData();

    // const config = {
    //   header: { "content-type": "multipart/form-data" },
    // };

    formData.append("file", files[0]);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Dropzone multiple={false} maxSize={800000000} onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div
                    style={{
                      width: "250px",
                      height: "220px",
                      border: "1px solid lightgray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    {...getRootProps()}
                  >
                    {console.log("getRootProps", { ...getRootProps() })}
                    {console.log("getInputProps", { ...getInputProps() })}
                    <input {...getInputProps()} />
                    <PlusOneRoundedIcon style={{ fontSize: "3rem" }} />
                  </div>
                )}
              </Dropzone>
              <div
                style={{
                  display: "flex",
                  width: "250px",
                  height: "220px",
                  overflowX: "scroll",
                }}
              >
                {/* {Images.map((image, index) => (
                  <div onClick={() => onDelete(image)}>
                    <img
                      style={{
                        minWidth: "300px",
                        width: "300px",
                        height: "240px",
                      }}
                      src={`http://localhost:4000/${image}`}
                      alt={`productImg-${index}`}
                    />
                  </div>
                ))} */}
              </div>
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
