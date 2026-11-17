import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Component } from "react";
import home from "../Pages/Home/home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
        index:true,
        path:"/",
        Component:home
      
        }
    ]
  }
]);
