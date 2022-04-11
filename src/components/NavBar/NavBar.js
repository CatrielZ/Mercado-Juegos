import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmonck'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    }, [])

    return(
    <nav className='navbar navbar-expand-lg navbar-light bg-light pb-0 pt-0'>
        <div className='container-fluid justify-content-center'>
            <img src="https://i.pinimg.com/736x/8d/73/5f/8d735f842b2e4f7182e14fa553c40ee1.jpg" alt='' width='150' height='130' className='me-5'/>
            <div className='collapse navbar-collapse justify-content-center mb-0 mt-0' id='navbarSupportedContent'>
                <ul className='navbar-nav me-5 mb-2 mb-lg-0'>
                    <li className='nav-item'>
                         <Link to='/list' className='nav-link active' aria-current='page' >Inicio</Link>
                         </li>
                    <li className='nav-item dropdown'>
                        <Link  to ='/' className='nav-link dropdown-toggle'  id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            Genero
                        </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li className='nav-item'>
                        { categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`} className='nav-link active'>{cat.description}</Link>)}
                    </li>
                </ul>
                    </li>
                </ul>
                
            <form className='d-flex'>
                <input className='form-control me-2' type='search' placeholder='Buscar' aria-label='Search'/>
                <button className='btn btn-outline-dark' type='submit'>Buscar</button>
            </form>
            <div className='m-5'>
            <CartWidget />
            </div>
            </div>
        </div>
                </nav>
    )
}

export default NavBar;