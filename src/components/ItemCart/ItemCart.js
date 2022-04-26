import { useContext } from "react";
import CartContext from "../../context/cartContext";

const ItemCart =({id,name, price, quantify}) =>{
    const {removeItem} = useContext(CartContext)

    return(
        <>
         <div>
                <ul>
                    <li>Cantidad: {quantify}</li>
                    <li>{name}</li>
                    <li>${price}</li>
                    <li>Subtotal: {quantify * price}</li>
                </ul>
                <button onClick={()=>removeItem(id)}>X</button>
            </div>
        </>
    )

}

export default ItemCart