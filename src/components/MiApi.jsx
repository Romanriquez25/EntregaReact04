
const Pokeapi = ({indicador}) =>{

 
        return(
            <>

               <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Peso</th>
                        <th scope="col"> Una Foto Bonita </th>
                    </tr>
                  </thead>
                    <tbody>
                        {
                            indicador.map((pokemon) => (
                            <tr key={pokemon.name}>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.type}</td>
                                <td>{pokemon.height}</td>
                                <td>{pokemon.weight}</td>
                                <td><img src={pokemon.img} alt={pokemon.name}/></td>
                            </tr>
                            ))
                        }
                    </tbody>
               </table>
               
            </>
        )
    }

    export default Pokeapi;

