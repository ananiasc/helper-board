import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './models/header/Header'
import Footer from './models/footer/Footer'
import Detetive from './models/boards/detetive/Detetive'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><h1>Bem vindos</h1><Footer /></>,
  },{
    path: "/detetive",
    element: <><Header/><Detetive /><Footer /></>,
  },
  {
    path: "/about-us",
    element: <><Header/>Sobre nós<Footer /></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
