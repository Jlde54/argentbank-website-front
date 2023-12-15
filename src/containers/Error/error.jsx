import React from 'react'
import { useNavigate } from 'react-router-dom'
import './error.css'

function Error() {
  const navigate = useNavigate()
  return (
    <div className="error">
      <h1 className="error-title">{404}</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <h3 className="error-link" onClick={() => navigate("/")}>
        Retourner sur la page d'accueil
      </h3>
    </div>
  )
}
  
export default Error