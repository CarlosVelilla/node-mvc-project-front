import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import withLayoutAdmin from "../../../../hoc/withLayoutAdmin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("client");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "http://localhost:4000/api/auth/sign-up",
        {
          fullName,
          email,
          password,
          role,
        },
        config,
      );
      navigate("/dashboard/users");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000000);
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
          Add New User
        </Typography>
        {error && <span>{error}</span>}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="full-name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                fullWidth
                name="role"
                label="Role"
                id="role"
                autoComplete="role"
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

export default withLayoutAdmin(CreateUsers);
