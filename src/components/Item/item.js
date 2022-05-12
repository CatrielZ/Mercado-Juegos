import { Link } from "react-router-dom"
import './Item.css'

const Item = ({name, img, id}) => {

    const handleClick = (e) => {
        e.stopPropagation()
    }
    return (
        <div className="col text-center" onClick={handleClick}>
        <div className="card colorCard">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title colorTitulo">{name}</h5>
            <Link to={`/detail/${id}`} className="btn btn-dark colorTitulo">Ver detalle</Link>
            </div>
        </div>
        </div>
    )
}

export default Item