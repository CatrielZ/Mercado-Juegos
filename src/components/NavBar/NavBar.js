import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories, getProducts } from '../../asyncmonck'
import Buscador from './Buscador'

const NavBar = () => {
    const [categories, setCategories] = useState([])
   
    useEffect(() =>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    }, [])

    return(
    <nav className='navbar navbar-expand-lg  pb-0 pt-0 fw-bold NavBarColor NavBar'>
        <div className='container-fluid justify-content-center text-center'>
            <img src="https://img.freepik.com/vector-gratis/logo-sala-juegos_191108-86.jpg" alt='' width='150' height='130' className='me-5 LogoNavBar'/>
            <div className='collapse navbar-collapse justify-content-center mb-0 mt-0' id='navbarSupportedContent'>
                <ul className='navbar-nav me-5 mb-2 mb-lg-0'>
                    <li className='nav-item'>
                         <Link to='/list' className='nav-link active colorText' aria-current='page' >Inicio</Link>
                         </li>
                    <li className='nav-item dropdown'>
                        <Link  to ='/' className='nav-link dropdown-toggle colorText'  id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Genero
                        </Link>
                <ul className='dropdown-menu NavBarColor' aria-labelledby='navbarDropdown'>
                    <li className='nav-item'>
                        { categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`} className='nav-link active colorText'>{cat.description}</Link>)}
                    </li>
                </ul>
                    </li>
                </ul>
                
                <Buscador />
            <div className='m-5'>
            <CartWidget />
            </div>
            </div>
        </div>
                </nav>
    )
}

export default NavBar;