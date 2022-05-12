import './Footer.css'

const Footer = () =>{
    return (
    <footer>    
        <div class="conteiner m-5 conteinerFooter bg-light  FooterColor colorTex">
        <div class="row m-3">
            <div class="col-12 col-md-4 ">
               <div class="px-5 my-5">
               <img src="https://img.freepik.com/vector-gratis/logo-sala-juegos_191108-86.jpg" alt='' width='150' height='130' className='me-5 LogoNavBar'/>
               </div>
            </div>
            <div class="col-12 col-md-4 ">
                <div class="row mx-5">
                    <p class="fw-bold"> CONTACTANOS</p>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="button" class="btn btn-primary m-2">Enviar</button>
                    <a class="m-3"> Tel:1566168945</a>
                  </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="row mx-5 py-5">
                    <div class="col-12 col-md-4">
                        <img class ="icon" src="imagenes/instagram.png" height="23" width="24" />
                    </div>
                    <div class="col-12 col-md-4">
                        <img class ="icon" src="imagenes/facebook.png" height="23" width="24" />
                    </div>
                    <div class="col-12 col-md-4">
                        <img class ="icon" src="imagenes/whatsapp.png" height="23" width="24" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Footer