import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import TheSummit from './Pages/theSummit'
import TheLodge from './Pages/theLodge'
import OurSkiRun from './Pages/ourSkiRun'
import HowToGetHere from './Pages/howToGetHere'
import Contact from './Pages/contact'

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      Component:<TheSummit />
    },
    {
      path: "/thelodge",
      Component:<TheLodge />
    },
    {
      path: "/ourskiruns",
      Component:<OurSkiRun />
    },
    {
      path: "/howtogethere",
      Component:<HowToGetHere />
    },
    {
      path: "/contact",
      Component:<Contact />
    }


  ])

  return (
    <>
    
      
        
    </>
  )
}

export default App
