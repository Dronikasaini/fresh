import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../compoent/header";
import Footer from "../compoent/Footer";
function Layout() {

  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  // ⭐ NEW STATE
  const [likeItems, setLikeItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // ⭐ LIKE FUNCTION
  const handleLike = (item) => {
    const alreadyLiked = likeItems.find((p) => p.id === item.id);

    if (alreadyLiked) {
      setLikeItems(likeItems.filter((p) => p.id !== item.id));
    } else {
      setLikeItems([...likeItems, item]);
    }
  };

  return (
    <>
      <Header
        openCart={openCart}
        setOpenCart={setOpenCart}
        cartItems={cartItems}
        likeItems={likeItems}   // ⭐ header ko bheja
      />

      <Outlet
        context={{
          addToCart,
          cartItems,
          setOpenCart,
          handleLike,   // ⭐ product ko bheja
          likeItems
        }}
      />

      <Footer />
    </>
  );
}

export default Layout;