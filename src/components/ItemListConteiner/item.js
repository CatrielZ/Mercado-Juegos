const Item = ({name, img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt= {name} />
            </picture>
            <p>{name}</p>
            <button>Ver detalle</button>
        </section>
    )
}
export default Item;