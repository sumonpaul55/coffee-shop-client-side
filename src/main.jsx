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
import Root from './layout/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://coffee-shop-server-sigma.vercel.app/coffee"),
        element: <App></App>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) => fetch(`https://coffee-shop-server-sigma.vercel.app/coffee/${params.id}`),
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
        loader: () => fetch(`https://coffee-shop-server-sigma.vercel.app/users`),
        element: <Users></Users>
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
