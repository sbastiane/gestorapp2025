import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


import { Home } from './components/pages/Home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home/>
  </StrictMode>,
)
