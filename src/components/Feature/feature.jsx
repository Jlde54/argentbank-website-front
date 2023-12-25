import React from 'react'
import './feature.css'

function Feature({Src, Alt, title, description}) 
{
  return (
    <div className="feature-item">
      <img src={Src} alt={Alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
  
export default Feature