import { Children, StrictMode } from 'react'
import { createBrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Pages/Layout.jsx'
import Home from './Pages/Home.jsx'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Error from './Pages/Error.jsx'
import Signup from './Pages/Signup.jsx'
const router=createBrowserRouter([
{
  path:'/',
  element:<Layout/>,
  errorElement:<Error/>,
  Children:[
    {path:'',
      element:<Home/>
    }
  ]
 
},
{
   path:'/login',
   element:<Login></Login>
},
{
  path:'/signup',
  element:<Signup></Signup>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
