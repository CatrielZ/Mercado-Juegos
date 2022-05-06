import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailConteiner/itemDetailConteiner';
import { getCategories } from './asyncmonck';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartContextProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Forms/Form';
import VideoBack from './components/VideosBack/VideoBack';
import './components/NavBar/NavBar.css'



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
        <VideoBack/>
          <NavBar />
          <div className='row '>
            <div className='col-2 m-1'>
              <div className='conteiner-fluid p-2 NavBarColor'>
                <h3 className='text-center fw-bold colorText'>Categorias</h3>
                  <div className='text-center  '>
                    <a className='list-group-item list-group-item-action'><Link to='/list'  aria-current='page'>Todos</Link></a>
                    <a>
                      {categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`} className='list-group-item list-group-item-action disabled'>{cat.description}</Link>)}
                    </a>
                  </div>
              </div>
            </div>
            <div className="container col-9">
              <Routes>
                <Route path='/list' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/form' element= {<Form/>}/>
                <Route path='/cart' element={<Cart/>} />
                
              </Routes>
            </div>
          </div>
          
        </BrowserRouter>
        </CartContextProvider>
    </>
  );
}

export default App;