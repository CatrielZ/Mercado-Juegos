import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid text-center">
            <a href=''><img src="https://i.pinimg.com/736x/8d/73/5f/8d735f842b2e4f7182e14fa553c40ee1.jpg" alt="logo" width="120" height="100"></img></a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="">Inicio</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Genero
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Categeria1</a></li>
                      <li><a class="dropdown-item" href="#">Categeria2</a></li> 
                      <li><a class="dropdown-item" href="#">Categeria3</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex m-2">
                  <input class="form-control me-2" type="search" placeholder="Juego, Genero, etc" aria-label="Search"/>  
                </form>
                <CartWidget /> 
              </div>
          </div>
      </nav>
      </div>
    )
}
export default NavBar