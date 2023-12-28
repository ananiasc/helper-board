import './App.css'
import Header from './models/header/Header'
import Footer from './models/footer/Footer'
import Detetive from './models/boards/detetive/Detetive'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
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

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
