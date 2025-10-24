import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import the source globals.css from the library
import '../../../libs/uilib/src/styles/globals.css'
// Import simple theme CSS for testing
import './simple-theme.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
