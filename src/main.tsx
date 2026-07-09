import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/global.css'
import { App } from '@/app'
import { configureHttpClient } from '@/app/config'

configureHttpClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
