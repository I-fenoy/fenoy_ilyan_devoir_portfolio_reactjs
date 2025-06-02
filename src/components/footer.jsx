import github from "../images/logo/github.png";
import linkedin from "../images/logo/logo-linkedin.png";
import twitter from "../images/logo/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className='footer-div1 footer-block'>
                <address>
                    <strong className='footer-link d-block'>John Doe</strong>
                    <a href='https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D' target='_blank' className='footer-link d-block'>40 rue Laure Diebold<br /> 69009 Lyon, France</a>
                    <a href='tel:1020304050' target='_blank' className='footer-link d-block'>10 20 30 40 50</a>
                    <a href='mailto:john.doe@gmaiil.com' target='_blank' className='footer-link d-block'>john.doe@gmail.com</a>
                    <div className='footer-logo'>
                        <a className='social-img' target="_blank"><img src={github} ></img></a>
                        <a className='social-img' target="_blank"><img src={linkedin} ></img></a>
                        <a className='social-img' target="_blank"><img src={twitter} ></img></a>
                    </div>
                </address>
            </div>

            <div className='footer-div2 footer-block'>
                <strong className='d-block'>Liens utiles</strong>
                <Link to="/" className="footer-link active text-light d-block" aria-current="page" >Home</Link>
                <Link to="/services" className="footer-link active text-light d-block" aria-current="page" >Services</Link>
                <Link to="/portfolio" className="footer-link active text-light d-block" aria-current="page" >Portfolio</Link>
                <Link to="/contact" className="footer-link active text-light d-block" aria-current="page" >Contact</Link>
                <Link to='/legalsnotices' className="footer-link active text-light d-block" aria-current="page" >Mentions Légales</Link>
            </div>


            <div className='footer-div3 footer-block'>
                <strong className='d-block'>Mes dernières réalisations</strong>
                <a href='#' className='footer-link d-block active'>Fresh food</a>
                <a href='#' className='footer-link d-block active'>Restaurant Akira</a>
                <a href='#' className='footer-link d-block active'>Espace bien-être</a>
                <a href='#' className='footer-link d-block active'>SEO</a>
                <a href='#' className='footer-link d-block active'>Création d'une API</a>
                <a href='#' className='footer-link d-block active'>Maquette d'un site</a>
            </div>
        </footer>
    )
}

export default Footer;