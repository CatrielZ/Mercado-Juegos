import Item from "./item";

const ItemList = ({products}) => {
    return (
    <div class="m-5">
        {products.map(prod => <Item key={prod.id}{...prod}/>)}
    </div>    
    )
}

export default ItemList;