import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

function MiApi() {
//se crean los Estados segun funcion 
  const [info, setInfo] = useState([]); 
  const [input, setInput] = useState(''); 
  const [personajeFiltro, setPersonajeFiltro] = useState([]); 
  const [personajeOrdenado, setPersonajeOrdenado] = useState([]); 

  useEffect(() => {
    consultarInformacion(); //1.a- Llama a la función para obtener la información de los personajes al cargar el componente
  }, []);

  const consultarInformacion = async () => {//1- se crea la fncion parallmar a la api
    const url = 'https://apisimpsons.fly.dev/api/personajes?limit=300&page=1';
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data.docs); //2- Actualiza el estado 'info' con los datos de los personajes obtenidos de la API
    const personajesOrdenados = data.docs.slice().sort((a, b) => a.Nombre.localeCompare(b.Nombre)); //3- Ordena los personajes iniciales por nombre
    setPersonajeOrdenado(personajesOrdenados); // 4-Actualiza el estado 'personajeOrdenado' con los personajes ordenados
    if (input === '') {
      setPersonajeFiltro(personajesOrdenados); // 5-Actualiza el estado 'personajeFiltro' solo si no hay un valor en el input
    }
  };

  // 7-Actualiza el estado 'input' con el valor del input ingresado por el usuario
  const filtro = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue); 
    // 8-Filtra los personajes en función del valor del input
    const personajesFiltrados = info.filter((personaje) =>
      personaje.Nombre.toLowerCase().includes(inputValue.toLowerCase())
    ); 
    // 9-Ordena los personajes filtrados por nombre
    personajesFiltrados.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
     //-10 Actualiza el estado 'personajeFiltro' con los personajes filtrados y ordenados
    setPersonajeFiltro(personajesFiltrados);
  };

  useEffect(() => {
    setPersonajeOrdenado(personajeFiltro); //10- Actualiza el estado 'personajeOrdenado' cuando cambia el estado 'personajeFiltro'
  }, [personajeFiltro]);

  return (
    <div>
      <Header filtro={filtro} /> {/*6- pasa la función de filtro como prop */}
      <main>
        {/*11- Mapea los personajes ordenados y renderiza el componente Card para cada uno */}
        {personajeOrdenado.map((personaje) => ( 
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
