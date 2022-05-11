import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailConteiner/itemDetailConteiner';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartContextProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Forms/Form';
import VideoBack from './components/VideosBack/VideoBack';
import './components/NavBar/NavBar.css'
import NavBarRight from './components/NavBar/NavBarRight';
import Footer from './components/Footer/Footer';



const App = () => {
 

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        <VideoBack/>
          <NavBar />
          <div className='row '>
            <div className='col-3 m-1 p-3'>
             <NavBarRight />
            </div>
            <div className="container col-8">
              <Routes>
                <Route path='/list' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/form' element= {<Form/>}/>
                <Route path='/cart' element={<Cart/>} />
              </Routes>
            </div>
          </div>
          
        </BrowserRouter>
        </CartContextProvider>
        <Footer />
    </>
  );
}

export default App;