import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import "@fontsource/figtree/400.css"
import "@fontsource/figtree/500.css"
import "@fontsource/figtree/600.css"
import { HelmetProvider } from "react-helmet-async";


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
)
