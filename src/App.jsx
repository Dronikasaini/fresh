import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./compoent/Layout";
import Account from "./compoent/Account";
import Home from "./compoent/Home";
import Detail from "./compoent/Detail";
import Cart from "./compoent/Cart";
import Recommdation from "./compoent/Recommdation";
import User from "./compoent/User";
import Order from "./compoent/Order";
import Status from "./compoent/Status";
import Liked from "./compoent/Liked";
import Login from "./compoent/Login";
import Signup from "./compoent/Signup";
import Dashboard from "./Admin/Dashboard";
import Products from "./Admin/Products";
import Orders from "./Admin/Orders";
import Users from "./Admin/Users";
import AdminLayout from "./Admin/AdminLayout";
import Slidebar from "./Admin/Slidebar";
function App() {


//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,   // Pehle Layout load hoga
//       children: [
//         {
//           index: true,
//           element: <Home />
//         },
//         {
//           path: "Detail",
//           element: <Detail/>
//         },{
//       path: "/Account",   
//       element: <Account />
//     },{
//       path: "/Home",    //address Url me /home likhne par Home component load hoga
//       element: <Home /> //room 
//     },{
//       path: "/Cart",    //address Url me /home likhne par Home component load hoga
//       element: <Cart/> //room 
//     },{
//       path:"/Recommdation", 
//       element: <Recommdation />   //address Url me /home likhne par Home component load hoga
//     },{
//       path:"/User",
//       element:<User />
//     },{
//       path:"/Order",
//       element:<Order />
//     },{
//       path:"/Status",
//       element:<Status />
//     },{
//       path:"/Liked",
//       element:<Liked/>,
//     },{
//   path: "/Login",
//   element: (
//     <>
//       <Home />
//       <Login />
//     </>
//   )
// },,{
//   path: "/Signup",
//   element: (
//     <>
//       <Home />
//       <Signup />
//     </>
//   )
// }

//       ]
//     }
//   ]);
//   {
//     path: "/admin",
//     element: <AdminLayout />,
//     children: [
//       { index: true, element: <Dashboard /> },
//       { path: "products", element: <Products /> },
//       { path: "orders", element: <Orders /> },
//       { path: "users", element: <Users /> }
//     ]
//   }
// ]);

//   return <RouterProvider router={router} />;
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Detail", element: <Detail /> },
      { path: "Account", element: <Account /> },
      { path: "Home", element: <Home /> },
      { path: "Cart", element: <Cart /> },
      { path: "Recommdation", element: <Recommdation /> },
      { path: "User", element: <User /> },
      { path: "Order", element: <Order /> },
      { path: "Status", element: <Status /> },
      { path: "Liked", element: <Liked /> },
      {
        path: "Login",
        element: (
          <>
            <Home />
            <Login />
          </>
        )
      },
      {
        path: "Signup",
        element: (
          <>
            <Home />
            <Signup />
          </>
        )
      }
    ]
  },

  // ✅ ADMIN ROUTE YAHI ADD KARNA HAI
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "users", element: <Users /> }
    ]
  }
]);
  return <RouterProvider router={router} />;
}
export default App;
