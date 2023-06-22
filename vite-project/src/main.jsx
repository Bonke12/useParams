import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CardInfo from './Components/CardInfo.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cards/:name",
    element: <CardInfo/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
