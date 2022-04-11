import { Link } from "react-router-dom"
const Item = ({name, img}) => {
    return(
      /*  <section class="m-5">
            <picture>
                <img src={img} alt= {name} class="card-img-top"/>
            </picture>
            <p class="fw-bold">{name}</p>
            <button>Ver detalle</button>
        </section>*/
        <div class="card" >
            <img src={img} alt= {name} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <a href="#" class="btn btn-primary">Ver detalle</a>
        </div>
        
      </div>
    )
}
export default Item;