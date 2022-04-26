import CartContext from "../../context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const {getQuantity} = useContext (CartContext)
    
    return (
        <>
            <Link to={'/cart'}>
                <a><img src="https://cdn-icons-png.flaticon.com/512/116/116356.png" height="23" width="24"></img></a>
                <div  class="badge bg-primary">{getQuantity()}</div>
            </Link>
        </>
        )
}

export default CartWidget