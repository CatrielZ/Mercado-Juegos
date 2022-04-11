import { Link } from "react-router-dom"
import Counter from "../Counter/counter"

const ItemDetail = ({id, name, img, category, description, price}) => {
    return (
        <div className="col">
        <div className="card">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Categoria: {category}</p>
            <p className="card-text">Descripcion: {description}</p>
            <p className="card-text">Precio: ${price}</p>
            <Counter />
            <Link to='#' className="btn btn-dark">Agregar al carrito</Link>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail