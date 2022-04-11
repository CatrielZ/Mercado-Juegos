import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailConteiner/itemDetailConteiner';

function App() {

  const  handleOnAdd = (quantify) =>{
    console.log(`se agrego ${quantify} a nuestro carrito`);
  }

  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
        <div className="container row">
        <Routes>
          <Route path='/list' element={<ItemListConteiner />} />
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
        </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
