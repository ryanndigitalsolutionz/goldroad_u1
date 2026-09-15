import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
