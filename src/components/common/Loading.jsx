import React from 'react'
import './sass/Loading.scss'

const Loading = ({ texto = 'Cargando...' }) => (

  <div className="loading">
    <div className="circle"></div>
    <p className="RF_Paragraph_4">{texto}</p>
  </div>
)

export default Loading
