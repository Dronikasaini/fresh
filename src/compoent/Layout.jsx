import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../compoent/Header";
import Footer from "../compoent/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;