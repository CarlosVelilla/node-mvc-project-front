import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/client/Home";
import ProductDetails from "./pages/client/ProductDetails";
import Checkout from "./pages/client/Checkout";
import ShoppingCart from "./pages/client/ShoppingCart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import ListUsers from "./pages/admin/Users/ListUsers";
import ListProducts from "./pages/admin/Products/ListProducts";
import CreateProducts from "./pages/admin/Products/CreateProducts";
import CreateUsers from "./pages/admin/Users/CreateUsers";
// import PrivateRoute from "./components/PrivateRoute";

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
            <Route path="/dashboard/orders" element={<Orders />} />
            <Route path="/dashboard/users" element={<ListUsers />} />
            <Route path="/dashboard/products" element={<ListProducts />} />
            <Route
              path="/dashboard/products/create"
              element={<CreateProducts />}
            />
            <Route path="/dashboard/users/create" element={<CreateUsers />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
