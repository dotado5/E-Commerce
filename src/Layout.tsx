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
      <section id="copyright">
        <div className="fourteen-forty container notice">
          Copyright © 2025 Shirovka Hackers. All rights reserved · Powered by{" "}
          <a
            href="http://igabztbruiyzea4vobbepke4wjfds4pbwk5peqtbihvzpz6cbz6colqd.onion"
            target="_blank"
            title="High performing e-commerce platform"
          >
            Zakonnyy®
          </a>
        </div>
      </section>
    </div>
  );
};

export default Layout;
