import './App.css'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


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
