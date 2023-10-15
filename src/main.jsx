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
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/users/Users.jsx';
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
  },
  {
    path: "/users",
    loader: () => fetch(`http://localhost:5000/users`),
    element: <Users></Users>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
