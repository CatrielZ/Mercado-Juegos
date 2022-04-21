import CartContext from "../../context/cartContext"
import { useContext } from "react"

const CartWidget = () => {

    const {getQuantity} = useContext (CartContext)
    
    return (
        <>
            <a><img src="https://cdn-icons-png.flaticon.com/512/116/116356.png" height="23" width="24"></img></a>
            <div  class="badge bg-primary">{getQuantity()}</div>
        </>
        )
}

export default CartWidget