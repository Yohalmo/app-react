import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoute from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </StrictMode>,
)
