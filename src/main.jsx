import ReactDOM from 'react-dom/client'
import { Routers } from './routers/index.jsx';
import { StrictMode } from 'react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Routers />
  </StrictMode>,
)
