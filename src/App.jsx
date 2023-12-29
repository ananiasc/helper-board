import './App.css'
import Header from './models/header/Header'
import Footer from './models/footer/Footer'
import Detetive from './models/boards/detetive/Detetive'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><Header/><h1>Bem vindos</h1><Footer /></>,
//   },{
//     path: "/detetive",
//     element: <><Header/><Detetive /><Footer /></>,
//   },
//   {
//     path: "/about-us",
//     element: <><Header/>Sobre nós<Footer /></>,
//   },
// ]);

function App() {
  return (
    // <>
    // <Router>
    //   <Routes>
    //     <Route path="/" exact component={<><Header/><h1>Bem vindos</h1><Footer /></>} />
    //     <Route path="/detetive" component={<><Header/><Detetive /><Footer /></>} />
    //     <Route path="/about-us" component={<><Header/>Sobre nós<Footer /></>} />
    //   </Routes>
    // </Router>

    // {/* <RouterProvider router={router} /> */}
    // </>
    <Router>
      <Routes>
        <Route path="/" exact element={<><Header/><h1>Bem vindos</h1><Footer /></>} />
        <Route path="/detetive" element={<><Header/><Detetive /><Footer /></>} />
        <Route path="/about-us" element={<><Header/>Sobre nós<Footer /></>} />
      </Routes>
    </Router>
  )
}

export default App
