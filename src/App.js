import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import ProductDetails from "./pages/client/ProductDetails";
import Checkout from "./pages/client/Checkout";
import ShoppingCart from "./pages/client/ShoppingCart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/check-out" element={<Checkout />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
