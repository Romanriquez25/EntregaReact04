
import Buscador from "../../components/Buscador.jsx";
import Pokeapi from "../../components/MiApi.jsx";
import Ordenar from "../../components/Ordenar.jsx"; 
import { useState, useEffect } from 'react'


function Landing() {
   


   //* usetaeState 

    const [indicador, setIndicador] = useState([]);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("asc");
    
  

  //consulta a la api

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
      try{
        const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon`);
        const data =  await respuesta.json();
        const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return {
            name: pokemonData.name.toUpperCase(),
            url: pokemon.url,
            type: pokemonData.types.map((typeInfo) => typeInfo.type.name.toUpperCase()),
            height: pokemonData.height,
            weight: pokemonData.weight,
            img: pokemonData.sprites.other.dream_world.front_default
          };
          
        }));
        setIndicador(pokemonData);
      }catch (error){
        alert(error);
      }
    }

    //seteo de busqueda y ordenamiento
    
    const heandleSearch = (e) => {
        setSearch(e.target.value);
    }

    let resultadoBusqueda = [];

    if (search !== "") {
        resultadoBusqueda = indicador.filter((pokemon) => {
            return pokemon.name.includes(search.toUpperCase());
        });
    } else {
        resultadoBusqueda = indicador;
    }
    
    const heandleOrder = (e) => {
        setOrder(e.target.value);
    }

    useEffect(() => {
      let resultadoOrden = [...indicador]; 
    
      if (order === "asc") {
          resultadoOrden.sort((a, b) => a.name.localeCompare(b.name));
      } else if (order === "desc") {
          resultadoOrden.sort((a, b) => b.name.localeCompare(a.name));
      }
    
      setIndicador(resultadoOrden);
  }, [order]);
    

    //retorno de componentes

  return (
    <>
      <Buscador value={search} heandleSearch={heandleSearch}/>
      <Ordenar value={order} heandleOrder={heandleOrder} />
      <Pokeapi indicador={resultadoBusqueda} />
    </>
  )
}

export default Landing;