import React from 'react'
import './sass/Loading.scss'

const Loading = ({ texto = 'Cargando...' }) => (

  <div className="loading">
    <div className="circle"></div>
    <p className="loading-title">{texto}</p>
  </div>
)

export default Loading
