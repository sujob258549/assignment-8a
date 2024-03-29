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
import Errorpage from './component/Errorpage/Errorpage.jsx';
import Read from './component/Read/Read.jsx';
import Wishlish from './component/Wishlish/Wishlish.jsx';
import About from './component/About/About.jsx';
import AboutDetail from './component/About/AboutDetail.jsx';
import Contact from './component/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hader></Hader>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        loader: () => fetch('/book.json'),
        element: <Home></Home>

      },
      {
        path: '/about',
        loader: () => fetch('/allbook.json'),
        element: <About></About>

      },
      {
        path: '/book/:id',
        loader: () => fetch('/book.json'),
        element: <Detailpage></Detailpage>

      },
      {
        path: '/aboutbook/:id',
        loader: () => fetch('/allbook.json'),
        element: <AboutDetail></AboutDetail>

      },
      {
        path: '/contact',
        loader: () => fetch('/allbook.json'),
        element: <Contact></Contact>

      },
      {
        path: '/Listed',
        loader: ()=> fetch('/book.json'),
        element: <Books></Books>,
        children:[
          {
            path:'',
            // loader: ()=> fetch('../public/book.json'),
            element: <Read></Read>
          },
          {
            path:'wishlist',
            element: <Wishlish></Wishlish>
          }
        ]
      },
      {
        path: '/PagestoRead',
        loader: () => fetch('/allbook.json'),
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
