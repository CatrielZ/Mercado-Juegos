import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    <ItemListConteiner greeting={'Bienvenidos'}/>
    < ItemCount stock={5} initial={1} />  
    </div>
  );
}

export default App;
