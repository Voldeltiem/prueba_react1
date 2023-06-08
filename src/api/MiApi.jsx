/**se importan los componentes a ocupar  */
import { useState, useEffect } from 'react';
import React from 'react';
import Card from '../components/Card';
/**Header lo importamos dentro de MiApi */
import Header from '../components/Header';

function MiApi() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState('');
  const [personajeFiltro, setPersonajeFiltro] = useState([]);

  useEffect(() => {
    consultarInformacion();
  }, []);

  /**4- en esta funcion llamos a la api */
  const consultarInformacion = async () => {
    const url = 'https://apisimpsons.fly.dev/api/personajes?limit=20&page=1';
    const response = await fetch(url);
    const data = await response.json();
  /**5- se manda al estado de setInfo */
    setInfo(data.docs);
    // Actualizar personajeFiltro solo si no hay ningún valor en el input
    if (input === '') {
      setPersonajeFiltro(data.docs);
    }
  };
  
  /**3- aqui el porps pasa por una constante la cual se manda al estado setInput */
  const filtro = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    /**6- la contante personajesFiltrados es el resultado de el filtro que se hace al arreglo bajo
     * los parametros de nombre
     */
    const personajesFiltrados = info.filter((personaje) =>
      personaje.Nombre.toLowerCase().includes(inputValue.toLowerCase())
    );
    /** por ultimo se manda a perosonajesFiltrados al estado setPersonajesFiltro para que luego sea usada en en main abajo
     * en la creacion de tarjetas
     */
    setPersonajeFiltro(personajesFiltrados);
  };

  return (
    <div>
      {/*2- en header por medio de props se extrae el valor del input*/}
      <Header filtro={filtro} />
      <main>
        {/* se recorre el arreglo con .map para tomar los datos y aderirlos a la tarjeta
        por medio de los props */}
        {personajeFiltro.map((personaje) => (
          <Card
            key={personaje._id}
            nombre={personaje.Nombre}
            imagenUrl={personaje.Imagen}
            historia={personaje.Historia}
            genero={personaje.Genero}
            estado={personaje.Estado}
            ocupacion={personaje.Ocupacion}
          />
        ))}                                       
      </main>
    </div>
  );
}

export default MiApi;
