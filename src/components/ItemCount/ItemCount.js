import { useState } from "react";


const ItemCount = (stock, initial, onAdd) => {
   
    const[count, setcount] = useState(0);

    const descontar = () => {
        if(count > 0) {
             setcount(count - 1);
        }
    }

    const incrementar = () =>{
        if (count < 10){
            setcount(count + 1);
        }
    }
    return (
        <div>
            <div class="text-center row mx-5 p-5">
                <button  onClick={incrementar} class="col-3">+</button>
                <p class=" fw-bold col-6 border">{count}</p>
                <button onClick={descontar} class="col-3">-</button>
            </div>
            <div class="row text-center justify-content-center">
                <button  class ="col-4">Agregar al carrito</button>
            </div>
        </div>
        
    )
}
export default ItemCount;