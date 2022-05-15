import { Link } from "react-router-dom"
import Counter from "../Counter/counter"
import './itemDetail.css'
import { useState, useContext } from "react"
import CartContext from "../../context/cartContext"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantify, setQuantity] = useState(0)

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (count) => {
        setQuantity(count)

        const productObj = {
            id, name, price, img, quantify
        }

        addItem({...productObj,quantify:count})
    }
    return (
        <div className="row text-center justify-content-evenly bordeImg">
            <div className="col-6">
                <div className="card-body">
                    <img src={img} className="card-img-top p-5 img-fluid " alt={name}  />
                </div>
            </div>     
            <div className="col-4 align-self-center colorTitulo">
                        <h1 className="card-title mb-5">{name}</h1> 
                        <div className="card-body my-5"> 
                            <p className="card-text fw-bold precioSize">${price} x{quantify}</p>
                            {isInCart(id) ? <Link to='/cart' className="btn btn-dark m-5">Carrito</Link> : <Counter initial={1} stock={stock} onAdd={handleOnAdd}/>}
                        </div>
                    </div>
        
            <div className=" col-10 colorTitulo descriptionGr m-5 bordeImg">
                <p className="fw-bold mt-5 ">DESCRIPCIÓN</p>
                <p className="card-text my-3">Categoria: {category}</p>
                <p className="card-text m-5 ">{description}</p>
            </div>
        </div>    
        
        
    )
}

export default ItemDetail