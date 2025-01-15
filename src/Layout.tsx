import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Notice from "./Components/Notice";

const Layout = () => {
  return (
    <div>
      <Notice />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
