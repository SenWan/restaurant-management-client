import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "menu",
            element: <Menu></Menu>        
          },
          {
            path: "order/:category",
            element: <Order></Order>
          }
      ]
    },
  ]);