import CartContext from "../../context/cartContext"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc, Timestamp } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase'
import { Link, NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import Cart from "../Cart/Cart"
import Toastify from 'toastify-js'
const objetoComprador = {name: "", phone:"", email:"", emailConfirm:"", address:""};

const Form = () => {
    const { cart, clearCart, totalCost } = useContext(CartContext);
    const [comprador, setComprador] = useState(objetoComprador);
    const [ordenEstado, setOrdenEstado] = useState(null);
    const [ordenId, setOrdenId] = useState(null);
    const [buttonDisabled,  setButtonDisabled] = useState(true);

    const onBlurHandler = (event) => {
        if (comprador.email === comprador.emailConfirm){
            setButtonDisabled(true)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mail incorrecto!',
                footer: 'Chequea tus datos por favor'
            })
        }
    }

    const getForm = (e) => {
      const { name, value } = e.target;
      setComprador({ ...comprador, [name]: value });
    };
  
    const orderConfirmed = () => {
      setComprador(objetoComprador);
      clearCart();
      setOrdenEstado("confirmado");
    };
  
    const crearOrden = async () => {
      setOrdenEstado("procesando");
  
      const objetoOrder = {
        items: cart.map((prod) => {
          return {
            id: prod.id,
            name: prod.name,
            price: prod.price,
          };
        }),
        compradorUser: comprador,
        total: totalCost(),
        date: new Date(),
      };
      const collectionRef = collection(firestoreDb,'orders');
      setOrdenId((await addDoc(collectionRef, objetoOrder )).id);
      orderConfirmed(ordenId)
    };
  
    const prodAgotado = () => {
      const ids = cart.map((p) => p.id);
      const batch = writeBatch(firestoreDb);
      const collectionRef = collection(firestoreDb, "products");
  
      getDocs(query(collectionRef, where(documentId(), "in", ids)))
        .then((response) => {
          response.docs.forEach((doc) => {
            const dataDoc = doc.data();
            const prodQuantity = cart.find((p) => p.id === doc.id)?.quantity; 
  
            if (dataDoc.stock >= prodQuantity) {
              batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
              batch.commit();
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const orderAndStock = () => {
      crearOrden();
      prodAgotado();
    };
  
    if (ordenEstado === "confirmado") {
      return (
        <>
          <div className="text-center m-5 colorText" >
            <h1>Gracias por tu compra!</h1>
            <p>Tu numero de orden es {ordenId} .</p>
            <button>
              <Link to="/list" className="btn btn-warning colorText">
                Ir a inicio
              </Link>{" "}
            </button>
          </div>
        </>
      );
    } else if (ordenEstado === "procesando") {
      return (
        <>
          <div className="colorText text-center">
            <h1>Estamos procesando tu orden.</h1>
          </div>
        </>
      );
    }
  
    return (
      <>
        <div className=" colorText m-5">
          <form className="form-group">
            <h2 className="text-center fw-bold"> Complete el formulario</h2>
            <div>
            <label>Nombre:</label>
            <input type="text" name="name" value={comprador.name} onChange={getForm} className="form-control" placeholder="Escribí tu nombre"/>
            <label>Telefono:</label>
            <input  type="text"  name="phone"  value={comprador.phone}  onChange={getForm}  className="form-control"  placeholder="Escribí tu telefono"/>
            <label>Email:</label>
            <input  type="text"  name="email"  value={comprador.email}  onChange={getForm}  className={((comprador.mailConfirm === comprador.mail) ? 'error' : 'great') && 'form-control'}  placeholder="Escribí tu email"/>
            <label>Repetir Email:</label>
            <input  type="text"  name="emailConfirm"  value={comprador.emailConfirm}  onChange={getForm}  className={((comprador.mailConfirm === comprador.mail) ? 'error' : 'great') && 'form-control'}  placeholder="Escribí tu email"/>
  
            <label>Direccion:</label>
            <input  type="text"  name="address"  value={comprador.address}  onChange={getForm}  className="form-control"  placeholder="Escribí tu dirección"/>
  
            <button onClick={() => orderAndStock()} className="btn btn-success m-2"> Finalizar compra </button>
            </div>
            
          </form>
        </div>
      </>
    );
  };
  
  export default Form;




