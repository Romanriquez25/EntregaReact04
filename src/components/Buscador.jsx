function Buscador({heandleSearch}) {
    return (
        <div>
            <label htmlFor="search">Buscar por nombre:</label>
            <input
                type="text"
                id="search"
                placeholder="Ingrese el nombre para buscar"
                onChange={heandleSearch}
            />
        </div>
    );
}

export default Buscador;