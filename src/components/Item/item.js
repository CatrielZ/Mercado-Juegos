import { Link } from "react-router-dom"
import './Item.css'

const Item = ({name, img, id}) => {
    return (
        <div className="col text-center">
        <div className="card">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/detail/${id}`} className="btn btn-dark">Ver detalle</Link>
            </div>
        </div>
        </div>
    )
}

export default Item