import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hader from './component/Hader/Hader.jsx';
import Home from './component/Home/Home.jsx';
import Books from './component/Books/Books.jsx';
import PagestoRead from './component/Pages-to-Read/PagestoRead.jsx';
import Detailpage from './component/Detailpage/Detailpage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hader></Hader>,
    children: [
     {
      path: '/',
      loader: ()=> fetch('../public/book.json'),
      element: <Home></Home>
      
     },
     {
      path: '/book/:id',
      loader: ()=> fetch('../public/book.json'),
      element: <Detailpage></Detailpage>
      
     },
     {
      path: '/Listed',
      element: <Books></Books>
     },
     {
      path: '/PagestoRead',
      element: <PagestoRead></PagestoRead>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
