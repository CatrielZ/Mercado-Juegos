import { useState } from "react"
import './Counter.css';
const Counter = () => {
    
    const initial = 1
    const stock = 50
    
    const [count, setCount] = useState(1)
    

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
        <div className="BotonesHorizontal">
            <button onClick={decrement} className="BotonesGrandes fw-bold">-</button>
            <p className="mx-2">{count}</p>
            <button onClick={increment} className="BotonesGrandes fw-bold">+</button>
        </div>
    )
}

export default Counter;