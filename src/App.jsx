import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./compoent/Layout";
import Account from "./compoent/Account";
import Home from "./compoent/Home";
import Detail from "./compoent/Detail";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,   // Pehle Layout load hoga
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "Detail",
          element: <Detail/>
        },{
      path: "/Account",   // 🔹 Layout ke bahar
      element: <Account />
    }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;