import { Link } from "react-router-dom"
import Counter from "../Counter/counter"
import './itemDetail.css'
import { useState } from "react"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantity, setQuantity]= useState(0)
    
    const handleOnAdd = (count) => {
        console.log('agregar al carrito')
        setQuantity(count)
    }
    return (
        <div className="row text-center justify-content-evenly">
            <div className="col-6">
                <div className="card-body">
                    
                    <img src={img} className="card-img-top p-5 img-fluid" alt={name}  />
                </div>
            </div>     
            <div className="col-4 align-self-center">
                        <h1 className="card-title mb-5">{name}</h1> 
                        <div className="card-body my-5"> 
                            

                            <p className="card-text fw-bold precioSize">${price}</p>
                            {quantity > 0 ? <Link to='/cart' className="btn btn-dark m-5">Comprar</Link> : <Counter initial={1} stock={stock} onAdd={handleOnAdd}/>}
                            
                        </div>
                    </div>
        
            <div className="card col-12">
                <p className="fw-bold mt-5">DESCRIPCIÓN</p>
                <p className="card-text my-3">Categoria: {category}</p>
                <p className="card-text m-5">{description}</p>
            </div>
        </div>    
        
        
    )
}

export default ItemDetail