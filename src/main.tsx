import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { captureAttribution, initLinkTracking, loadTagManager } from './attribution'

captureAttribution()
initLinkTracking()
loadTagManager()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
