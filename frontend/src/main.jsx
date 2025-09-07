import React from 'react'
import { createRoot } from 'react-dom/client'
function App(){
  return (
    <div style={{fontFamily:'system-ui',padding:'20px'}}>
      <h1>Portfolio App</h1>
      <p>API health: <a href="/api/health" target="_blank">/api/health</a></p>
    </div>
  )
}
createRoot(document.getElementById('root')).render(<App/>)
