import './App.css'
import About from './components/About'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Service from './components/Service'


const router = createBrowserRouter ([
  {
    path : '/',
    element : <HomePage />
  },
  {
    path : '/login',
    element : <Login />
  },
  {
    path : '/signup',
    element : <Signup />
  },
  {
    path : '/contact',
    element : <Contact />
  },
  {
    path : '/about',
    element : <About />
  },
  {
    path : '/service',
    element : <Service />
  }
])

function App() {

  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
