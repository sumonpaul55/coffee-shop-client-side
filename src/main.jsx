import React, { } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/addCoffe/AddCoffee.jsx';
import UpdateCoffee from './components/updateCoffee/UpdateCoffee.jsx';
import SignIn from './components/signin/SignIn.jsx';
import SignUp from './components/signup/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("http://localhost:5000/coffee"),
    element: <App></App>,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
    element: <UpdateCoffee></UpdateCoffee>
  }
  , {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
