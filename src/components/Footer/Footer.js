import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

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
                    <a class="m-3" src="https://web.whatsapp.com"> Tel:1566168945</a>
                  </div>
            </div>
            <div class="col-12 col-md-4 text-center">
                <div class="row mx-5 py-5">
                <ul className='redes'>
                    <li className="social m-2"><SocialIcon url="https://www.instagram.com/z.catriel/" network="instagram"/></li>
                    <li className="social m-2"><SocialIcon url="https://www.linkedin.com/in/zeeb-catriel-labat-46a80b188/"/></li>   
                </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Footer