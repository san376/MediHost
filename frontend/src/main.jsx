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

// Babel will convert jsx/Modern js into older javascript
// Because Browser will not understand the jSX



// More than 1 Default Export should not be Created in a single file
// we can change the name of the function while import in default Export
// For Default Export willnot use {}

CreateRoot(....) is React 18 Function
