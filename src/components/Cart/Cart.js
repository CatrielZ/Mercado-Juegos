import ItemCart from "../ItemCart/ItemCart"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/cartContext"
import { firestoreDb } from "../../service/firebase"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore"
import './Cart.css'

const Cart =() =>{
    const { cart, totalCost, clearCart, finishBuy} = useContext(CartContext)

    if(cart.lenght === 0){
        return(
            <>
                <h2>Carrito Vacio</h2>
                <Link to={'/'}>Conocé nuestros productos</Link>
            </> 
        )
    }

    return (
        <>
            <div className="text-center">
            <   link href="https://fonts.googleapis.com/css2?family=Macondo&display=swap" rel="stylesheet"/>
                    {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)}
                    <p className="fw-bold colorPrecio bordePrecio m-5">Total: ${totalCost()}</p>
                    <button className="btn btn-primary m-5" onClick={() => clearCart()}>Vaciar</button>
                    <Link className="btn btn-success m-5" to={'/form'}>Realizar Compra</Link>
                 
            </div>
        
        </>
    )
}

export default Cart