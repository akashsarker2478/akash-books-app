import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../Error/ErrorPage';
import Home from '../Home/home';
import About from '../about/About';
import BookDetails from '../BookDetails/BookDetails';
import Readlist from '../readlist/Readlist';



 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:'/',
            loader:()=> fetch('BooksData.json'),
            Component:Home
        },
        {
          path: '/about',
          Component:About
        },
        {
          path:'/bookDetails/:id',
          loader: ()=>fetch('/BooksData.json'),
          Component:BookDetails,
        },
        {
          path :'/readlist',
           loader: ()=>fetch('/BooksData.json'),
          Component:Readlist,
        }
    ]
  },
]);

