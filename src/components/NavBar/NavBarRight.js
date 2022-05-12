import './NavBar.css'
import { Link } from 'react-router-dom'
import { getCategories } from '../../asyncmonck'
import { useEffect, useState } from 'react'


const NavBarRight = () => {
    const [categories, setCategories] = useState([])
  
    useEffect(() =>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    }, [])
    return (
        <div className='conteiner-fluid p-2 categoriasColor'>
                <h3 className='text-center fw-bold colorText'>Categorias</h3>
                  <ul className='text-center list-group p-5 m-3 '>
                    <li className='list-group-item-warning'><Link to='/list'  aria-current='page' className='colorText'>Todos</Link></li>
                    <li className='  colorText list-style-none '>
                      {categories.map(cat =><Link key={cat.id} to={`/category/${cat.id}`} className=' list-group-item " '>{cat.description}</Link>)}
                    </li>
                  </ul>
              </div>
    )
}

export default NavBarRight