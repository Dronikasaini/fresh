import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./compoent/Layout";
import Account from "./compoent/Account";
import Home from "./compoent/Home";
import Detail from "./compoent/Detail";
import Cart from "./compoent/Cart";
import Recommdation from "./compoent/Recommdation";
import User from "./compoent/User";
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
      path: "/Account",   
      element: <Account />
    },{
      path: "/Home",    //address Url me /home likhne par Home component load hoga
      element: <Home /> //room 
    },{
      path: "/Cart",    //address Url me /home likhne par Home component load hoga
      element: <Cart /> //room 
    },{
      path:"/Recommdation", 
      element: <Recommdation />   //address Url me /home likhne par Home component load hoga
    },{
      path:"/User",
      element:<User />
    }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
