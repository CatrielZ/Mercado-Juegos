import { useState, useEffect } from 'react';
//import { getProductsById } from '../../asyncmonck';
import ItemDetail from '../ItemDetail/itemDetail';
import { useParams } from 'react-router-dom';
import CartContext from '../../context/cartContext';
import { firestoreDb } from '../../service/firebase';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = ({setCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { productId} = useParams()

    useEffect(() => {
        /*getProductsById(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })*/
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response);
            const product ={id: response.id, ...response.data()}
            setProduct(product)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    return (
        <div className="itemDetailContainer text-center m-3" >
            {
                loading ?
                    <h1>Cargando detalle...</h1> :
                product ?
                    <ItemDetail {...product} setCart={setCart} cart={cart} /> :
                    <h1>El producto no existe</h1>
            }
            
        </div>
    )

}
export default ItemDetailContainer