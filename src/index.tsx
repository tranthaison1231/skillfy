import { createRoot } from 'react-dom/client'
import './style.css'
import { Routes } from '@generouted/react-router/lazy'
import { Toaster } from './components/Toaster'

const root = createRoot(document.getElementById('root'))

root.render(
  <div>
    <Routes />
    <Toaster />
  </div>
)
