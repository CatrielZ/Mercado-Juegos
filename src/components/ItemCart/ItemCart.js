import { useContext } from "react";
import CartContext from "../../context/cartContext";
import { firestoreDb } from "../../service/firebase";
import './itemCart.css'



const ItemCart =({id, name, price, quantify, img}) =>{
    const {removeItem} = useContext(CartContext)

    return( 
        <>
            <div className="back m-5 colorText">
                                <img src={img} className="m-2 img-fluid" />
                                <h2 className="">{name}</h2>
                                <p class="text-center col-12 fw-bold ">Precio:  ${price} </p>
                                <p class="text-center col-12 fw-bold">Cantidad: {quantify} </p>
                                <p>Subtotal: ${quantify * price}</p>
                                <a onClick={()=>removeItem(id)} class="btn bg-primary text-white btn-info btn-delete col-3">QUITAR</a>
                                <div><hr/><hr/></div>
            </div>
        </>
    )

}

export default ItemCart