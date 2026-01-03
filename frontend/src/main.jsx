import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
    <App />
    </AppContextProvider>
  </BrowserRouter>,
)



// To tell React where and how to render the UI in the browser DOM.
// Connects React to the HTML page
// Creates a React root
// Renders the React component tree