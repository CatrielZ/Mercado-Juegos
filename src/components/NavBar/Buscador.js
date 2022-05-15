import { useState } from "react";
import { firestoreDb } from "../../service/firebase";
import { collection, getDocs, getDoc, where } from "firebase/firestore";
const Buscador = () =>{

const [nombre, setnombre]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");


const handleChange=e=>{
  setBusqueda(e.target.value);  
  filtrar(e.target.value)

}

const filtrar = (terminoBusqueda) =>{
    const resultadosBusqueda = getDocs(collection(firestoreDb, 'products'),where ('name')).filter((elementos) =>{
        if(elementos.name.toString().toLowerCase().include(terminoBusqueda.toLowerCase())){
            return elementos;
        }
    })
}

    return (
        
        <form className='d-flex'>
                <input className='form-control me-2' type='search' onChange={handleChange} value= {busqueda} placeholder='Buscar' aria-label='Search'/>
                <button className='btn btn-outline-dark' type='submit'>Buscar</button>
            </form>
               
    )
}
export default Buscador;