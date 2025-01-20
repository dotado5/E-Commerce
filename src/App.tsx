import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import HowToOrder from "./Pages/HowToOrder";
import Referral from "./Pages/Referral";
import Information from "./Pages/Information";
import CustomerService from "./Pages/CustomerService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/howto" element={<HowToOrder />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/information" element={<Information />} />
          <Route path="/customer_service" element={<CustomerService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
