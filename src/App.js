import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    <ItemListConteiner greeting={'Bienvenidos'}/>  
    </div>
  );
}

export default App;
