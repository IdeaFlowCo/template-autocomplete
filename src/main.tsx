import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className="App">
          <App />
      </div>
  </StrictMode>,
)
