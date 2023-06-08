import React from 'react'
import { useState } from 'react'


function Header({filtro}) {
  /**1-por medio de un imput y un props mandamos los datos a MIApi par que sea utilizados */
  return (
    <header>
        <div>
        <img className='logo' src="https://www.pngmart.com/files/17/The-Simpsons-PNG-Transparent-Image.png" alt="Los Simpsons" />
        </div>
        <div className="input-group">
            <input onChange={filtro} type="text" className="form-control" placeholder="Ingrese un nombre" aria-label="Text input with dropdown button" aria-describedby="basic-addon2"></input>
            <button className="btn btn-outline-secondary" type="button"  aria-expanded="false">filtro</button>
        </div>
    </header>
  )
}

export default Header