
import './App.css';

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

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
