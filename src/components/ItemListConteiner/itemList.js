import Item from "../Item/item";

const ItemList = ({products}) => {
    return (
    <div class="row justify-content-center">
        {products.map(prod => <Item key={prod.id}{...prod}/>)}
    </div>    
    )
}

export default ItemList;