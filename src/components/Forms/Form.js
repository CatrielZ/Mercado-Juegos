import CartContext from "../../context/cartContext"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase'
import { Link } from 'react-router-dom'

const Form = () => {

    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, totalCost } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...value, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
            buyer: input,
            total: totalCost(),
            date: new Date
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                console.log(`El id de la orden es ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

   if (orderId) {
       return (
            <>  
                <h1 className="BuyTitle">Gracias por tu compra!</h1>
                <h3 className="Code">Tu código es: {orderId}</h3>
                <p className="Code">Pronto nos contactaremos para coordinar la entrega</p>
            </>
       )
    }

    if (loading) {
        return <h1>Procesando compra</h1>
    }


    return (
      
        <form className="m-5 colorText">
            <div class="form-group">
                <fieldset className="m-1">
                    <label class="form-label" for="Input">Nombre</label>
                    <input class="form-control" id="Input" type="text" placeholder="Nombre" disabled=""/>

                
                    <label class="form-label" for="disabledInput">Apellido</label>
                    <input class="form-control" id="disabledInput" type="text" placeholder="Apellido" disabled=""/>

                
                    <label class="form-label" for="disabledInput">Dirección</label>
                    <input class="form-control" id="disabledInput" type="text" placeholder="Dirección" disabled=""/>

                
                    <label class="form-label" for="disabledInput">Telefono</label>
                    <input class="form-control" id="disabledInput" type="number" placeholder="Telefono" disabled=""/>
                </fieldset>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <label for="exampleInputEmail1" class="form-label mt-4">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>   
            </div>
            <div>
                        <button onClick={() => createOrder()} className="btn btn-success m-2">Finalizar compra</button>
                    </div>
        </form> 
    )

    }
export default Form    
