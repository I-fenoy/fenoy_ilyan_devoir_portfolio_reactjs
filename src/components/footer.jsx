import github from "../images/logo/github.png";
import linkedin from "../images/logo/logo-linkedin.png";
import twitter from "../images/logo/twitter.png";

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className='footer-div1 footer-block'>
                <address>
                    <strong className='d-block'>John Doe</strong>
                    <a href='https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D' target='_blank' className='d-block'>40 rue Laure Diebold<br /> 69009 Lyon, France</a>
                    <a href='tel:1020304050' target='_blank' className='d-block'>10 20 30 40 50</a>
                    <a href='mailto:john.doe@gmaiil.com' target='_blank' className='d-block'>john.doe@gmail.com</a>
                    <div className='footer-logo'>
                        <a className='social-img'><img src={github} ></img></a>
                        <a className='social-img'><img src={linkedin} ></img></a>
                        <a className='social-img'><img src={twitter} ></img></a>
                    </div>
                </address>
            </div>

            <div className='footer-div2 footer-block'>
                <strong className='d-block'>Liens utiles</strong>
                <a href='#' className='d-block'>Acceuil</a>
                <a href='#' className='d-block'>Services</a>
                <a href='#' className='d-block'>Portfolio</a>
                <a href='#' className='d-block'>Me contacter</a>
                <a href='#' className='d-block'>Mentions légales</a>
            </div>


            <div className='footer-div3 footer-block'>
                <strong className='d-block'>Mes dernières réalisations</strong>
                <a href='#' className='d-block'>Fresh food</a>
                <a href='#' className='d-block'>Restaurant Akira</a>
                <a href='#' className='d-block'>Espace bien-être</a>
                <a href='#' className='d-block'>SEO</a>
                <a href='#' className='d-block'>Création d'une API</a>
                <a href='#' className='d-block'>Maquette d'un site</a>
            </div>
        </footer>
    )
}

export default Footer;