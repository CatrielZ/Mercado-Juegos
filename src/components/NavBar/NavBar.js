import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid text-center">
            <a><img src="https://www.adata.com/_nuxt/img/xpg_logo.e87e200.png" alt="logo" width="300" height="100"></img></a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      CATEGORIAS
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Categeria1</a></li>
                      <li><a class="dropdown-item" href="#">Categeria2</a></li> 
                      <li><a class="dropdown-item" href="#">Categeria3</a></li>
                    </ul>
                  </li>
                </ul>
                <CartWidget  />
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Buscador</button>
                </form>
              </div>
          </div>
      </nav>
      </div>
    )
    //<img src="https://www.adata.com/_nuxt/img/xpg_logo.e87e200.png" alt="logo" width="300" height="100"></img>
}
export default NavBar