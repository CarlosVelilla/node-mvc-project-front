import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../../../components/AddressForm";
import PaymentForm from "../../../components/PaymentForm";
import Review from "../../../components/Review";

import withLayoutClient from "../../../hoc/withLayoutClient";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../../context/StateProvider";
import axios from "axios";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

const Checkout = () => {
  const [currentShippingData, setCurrentShippingData] = useState();
  const [currentPaymentData, setCurrentPaymentData] = useState();
  const [error, setError] = useState("");

  const [activeStep, setActiveStep] = React.useState(0);
  const [{ basket, shippingAddress, payment }] = useStateValue();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === 2) {
      return postOrder();
    }
    switch (activeStep) {
      case 0:
        setCurrentShippingData(shippingAddress);
        break;
      case 1:
        setCurrentPaymentData(payment);
        break;
      default:
        return;
    }
  };

  const postOrder = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData._id;

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        "http://localhost:4000/api/order/",
        {
          userId,
          basket,
          shippingAddress,
          payment,
        },
        config,
      );
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000000);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default withLayoutClient(Checkout);
