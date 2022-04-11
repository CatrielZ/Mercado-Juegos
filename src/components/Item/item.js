
const Item = ({name, img, id}) => {
    return (
        <div className="col">
        <div className="card">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            </div>
        </div>
        </div>
    )
}

export default Item;