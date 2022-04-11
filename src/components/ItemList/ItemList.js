import Item from "../Item/item"

const ItemList = ({products}) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {products.map(prods => <Item key={prods.id} {...prods}/>)}
            
        </div>
    )
}

export default ItemList