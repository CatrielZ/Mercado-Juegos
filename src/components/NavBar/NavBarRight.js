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
        <div className='conteiner-fluid p-2 m-2 categoriasColor'>
                <h3 className='text-center fw-bold colorText pt-5'>Categorias</h3>
                  <ul className='text-center  p-5 m-5 NavBarRight '>
                    <li className=' colorTextCategorias fw-bold '><Link to='/list'  aria-current='page'><li>Todos</li></Link></li>
                    <li className='colorTextCategorias fw-bold'>
                      {categories.map(cat =><Link key={cat.id} to={`/category/${cat.id}`} className='  colorTextCategorias categoriasColor" '><li>{cat.description}</li></Link>)}
                    </li>
                  </ul>
              </div>
    )
}

export default NavBarRight