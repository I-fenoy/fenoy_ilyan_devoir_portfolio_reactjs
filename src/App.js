
import './App.css';
import github from "./images/logo/github.png";
import linkedin from "./images/logo/logo-linkedin.png";
import twitter from "./images/logo/twitter.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg bg-dark nav-header">
          <div class="container-fluid">
            <h1 class="navbar-brand text-light" href="#">JOHN DOE</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse div-nav-link" id="navbarTogglerDemo02">

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active text-light" aria-current="page" href="#">services</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active text-light" aria-current="page" href="#">portfolio</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active text-light" aria-current="page" href="#">Contact</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active text-light" aria-current="page" href="#">mentions légales</a>
                </li>
                
              </ul>

            </div>
          </div>
        </nav>
      </header>

      <footer class="bg-dark">
        <div className='footer-div1 footer-block'>
          <address>
            <strong  className='d-block'>John Doe</strong>
            <a href='#' target='_blank' className='d-block'>40 rue Laure Diebold 69009 Lyon, France</a>
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
          <strong  className='d-block'>Liens utiles</strong>
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
    </div>
  );
}

export default App;
