import { Link } from "react-router-dom"
import Counter from "../Counter/counter"
import './itemDetail.css'

const ItemDetail = ({id, name, img, category, description, price}) => {
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
                            <Counter />
                            <Link to='#' className="btn btn-dark m-5">Agregar al carrito</Link>
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