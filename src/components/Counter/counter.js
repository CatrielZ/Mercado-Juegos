import { useState } from "react"
import './Counter.css';
const Counter = ({initial, stock, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    

    const decrement = () => {
        if (count > initial) {
        setCount(count -1)
        }
    }

    const increment = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }
    

    return(  
        <div className="BotonesHorizontal row">
            
            <button onClick={decrement} className="BotonesGrandes fw-bold col-3">-</button>
            <p className="mx-2 col-3">{count}</p>
            <button onClick={increment} className="BotonesGrandes fw-bold col-3">+</button>
            <button type="button" class="btn btn-outline-info col-12">({stock} disponible)</button>
           
            <div className="col-12 text-center m-5">
            
            <button   type ="button" className="btn btn-dark " onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            
        </div>
    )
}

export default Counter;