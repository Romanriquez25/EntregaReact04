
const Ordenar = ({order,heandleOrder}) => {
    return(
        
         <div>
            <label htmlFor="order">Ordenar por:</label>
            <select name="order" id="order" value={order} onChange={heandleOrder} >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
        
       
    )
}

export default Ordenar;