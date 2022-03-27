import './NavBar.css'

const NavBar = () => {
    return(
        <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid text-center">
          <img src="https://www.adata.com/_nuxt/img/xpg_logo.e87e200.png" alt="logo" width="300" height="100"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Categoria 1</a></li>
                  <li><a class="dropdown-item" href="#">Categoria 2</a></li>
                  <li><a class="dropdown-item" href="#">Categoria 3</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
export default NavBar