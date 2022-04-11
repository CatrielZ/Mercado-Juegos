import { useState, useEffect } from 'react';
import { getProductsById } from '../../asyncmonck';
import ItemDetail from '../ItemDetail/itemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId} = useParams()

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    return (
        <div className="IitemDetailContainer" >
            {
                loading ?
                    <h1>Cargando detalle...</h1> :
                product ?
                    <ItemDetail {...product} /> :
                    <h1>El producto no existe</h1>
            }
            
        </div>
    )

}
export default ItemDetailContainer