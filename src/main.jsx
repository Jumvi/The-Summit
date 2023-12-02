import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import TheSummit from './Pages/theSummit'
import TheLodge from './Pages/theLodge'
import OurSkiRun from './Pages/ourSkiRun'
import HowToGetHere from './Pages/howToGetHere'
import Contact from './Pages/contact'


const router = createBrowserRouter([
  {
    path: "/",
    element:<TheSummit />
  },
  {
    path: "/thelodge",
    element:<TheLodge />
  },
  {
    path: "/ourskiruns",
    element:<OurSkiRun />
  },
  {
    path: "/howtogethere",
    element:<HowToGetHere />
  },
  {
    path: "/contact",
    element:<Contact />
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
