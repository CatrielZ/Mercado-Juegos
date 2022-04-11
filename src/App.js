import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const  handleOnAdd = (quantify) =>{
    console.log(`se agrego ${quantify} a nuestro carrito`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    <ItemListConteiner greeting={'Bienvenidos'}/>
    < ItemCount initial={1} stock={9} onAdd={handleOnAdd}></ItemCount>
    </div>
  );
}

export default App;
