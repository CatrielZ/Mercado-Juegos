import { useState } from "react";


const Counter = ({stock, initial, onAdd}) => {
   
    const[count, setcount] = useState(initial);

    const descontar = () => {
        if(count > initial) {
            setcount(count - 1);
        }
    }

    const incrementar = () =>{
        if (count < stock){
            setcount(count + 1);
        }
    }
    return (
        <div class="conteiner-fluid">
            <div class="text-center row mx-5 p-5">
                <button  onClick={incrementar} class="col-3">+</button>
                <p class=" fw-bold col-6 border">{count}</p>
                <button onClick={descontar} class="col-3">-</button>
            </div>
            <div class="row text-center justify-content-center">
                <button onClick={() => onAdd(count)} class ="col-4">Agregar al carrito</button>
            </div>
        </div>
        
    )
}
export default Counter;