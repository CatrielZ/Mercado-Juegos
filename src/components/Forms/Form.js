import CartContext from "../../context/cartContext"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Cart from "../Cart/Cart"
import Toastify from 'toastify-js'

const Form = () => {

    const [input, setInput] = useState({name: '', address: '', mail: '', mailConfirm: '', phone: '' })
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [buttonDisabled,  setButtonDisabled] = useState(true);

    const { cart, totalCost } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onBlurHandler = (event) => {
        if (input.mail === input.mailConfirm){
            setButtonDisabled(false)
        } else {
            Toastify({
                text: "El mail no es el mismo",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();  
        }
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
            buyer: {...input},
            total: totalCost(),
            date: new Date()
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
       return(
             
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Gracias por tu compra! ${input.name}`,
                showConfirmButton: false,
                timer: 1500
                })            
       )
    }

    if (loading) {
        return <h1>Procesando compra</h1>
    }
    if(cart.length === 0) {
        return <Cart/>
    }


    return (
        <form className="m-5 colorText" onSubmit={handleSubmit}>
            <div class="form-group">
                <fieldset className="m-1">
                    <label class="form-label" for="Input">Nombre y Apellido</label>
                    <input class="form-control" id="Input" type="text" placeholder="Nombre y Apellido" name="name" onChange={handleChange} value={input.nombre} disabled=""/>

                
                    <label class="form-label" for="disabledInput">Dirección</label>
                    <input class="form-control" id="disabledInput" type="text" placeholder="Dirección" name="address"  onChange={handleChange} value={input.direccion} disabled=""/>

                
                    <label class="form-label" for="disabledInput">Telefono</label>
                    <input class="form-control" id="disabledInput" type="number" onChange={handleChange} name="phone" value={input.telefono} placeholder="Telefono" disabled=""/>
                </fieldset>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="mail" aria-describedby="emailHelp" onChange={ handleChange} value={input.correo} placeholder="Enter email"/>
               
               <label for="exampleInputEmail1" class="form-label mt-4">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="mailConfirm" onChange={ handleChange} value={input.correo}  placeholder="Enter email"/>    
            </div>
            <div>
                        <button onClick={() => createOrder()} className="btn btn-success m-2">Finalizar compra</button>
                    </div>
        </form> 
    )

    }
export default Form    
