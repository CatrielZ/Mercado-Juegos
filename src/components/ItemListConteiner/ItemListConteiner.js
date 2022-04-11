import { useState, useEffect } from "react"
import { getGames } from "../../asyncmonck";
import ItemList from "./itemList";
import ItemDetailContainer from "../ItemDetailConteiner/itemDetailConteiner";


const ItemListConteiner = (props) => {
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        getGames().then (prods => {
            setProducts(prods);

        })
    },[])
    return (
        <div class="conteiner-fluid m-5 text-center ">
            <h1 class="text-center fw-bold">{props.greeting}</h1>
            <ItemList products={products}/>
            <ItemDetailContainer/>
            
            
        </div>
    )
}

export default ItemListConteiner