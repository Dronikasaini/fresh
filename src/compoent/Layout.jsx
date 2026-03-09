import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../compoent/header";
import Footer from "../compoent/Footer";

function Layout() {

  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <>
      <Header
        openCart={openCart}
        setOpenCart={setOpenCart}
        cartItems={cartItems}
      />

      <Outlet context={{ addToCart, cartItems, setOpenCart }} />

      <Footer />
    </>
  );
}

export default Layout;