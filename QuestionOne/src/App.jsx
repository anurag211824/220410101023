
import React from "react";
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./components/layout/AppLayout";
import getProductData from "./api/ProductData.jsx";
import Product from "./pages/Product.jsx";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Product />,
          loader:getProductData
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

