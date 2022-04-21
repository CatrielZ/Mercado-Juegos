import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailConteiner/itemDetailConteiner';
import { getCategories } from './asyncmonck';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartContextProvider } from './context/cartContext';


const App = () => {
  const [categories, setCategories] = useState([])

    useEffect(() =>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    }, [])

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        <NavBar />
        <div className='row'>
        <div className='col-2 m-1 '>
          <h3 className='text-center fw-bold'>Categorias</h3>
          <ul className='text-center list-group'>
            <li className='list-group-item'><Link to='/list'  aria-current='page'>Todos</Link></li>
            <li>
              { categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`} className='list-group-item'>{cat.description}</Link>)}
            </li>
          </ul>
        </div>
        <div className="container col-9">
        <Routes>
          <Route path='/list' element={<ItemListContainer />} />
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
        </div>
        </div>
        </BrowserRouter>
        </CartContextProvider>
    </>
  );
}

export default App;