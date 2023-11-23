import React from 'react'
import ReactDOM from 'react-dom/client'
import {  Main } from './pages/Main/Main.jsx'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} >
      <Main />
    </RouterProvider>
  </React.StrictMode>,
)
