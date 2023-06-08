import React from 'react'

//se declaran los props destructurados 
function Card({nombre, imagenUrl, historia, genero, estado, ocupacion}) {
  return (
    /**Creacion de n tarjeta lateral por medio de boostrap en la cual
     * se llmara los datos como nombre, historia, ocpacion, etc.
     */
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <img src={imagenUrl} className="img-fluid rounded-start imagen" alt={nombre}></img>
    </div>
    <div className="col-md-8">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text flex-grow-1">
          <small><strong>Historia: </strong>{historia}</small>
        </p>
        <p className="card-text">
          <small><strong>Genero: </strong>{genero}</small>
        </p>
        <p className="card-text">
          <small><strong>Estado: </strong>{estado}</small>
        </p>
        <p className="card-text">
          <small><strong>Ocupacion: </strong>{ocupacion}</small>
        </p>
      </div>
    </div>
  </div>
</div>


    
  )
}

export default Card