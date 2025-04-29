import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-dark nav-header">
                <div class="container-fluid">
                    <h1 class="navbar-brand text-light" >JOHN DOE</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse div-nav-link" id="navbarTogglerDemo02">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active text-light" aria-current="page" >Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/services" class="nav-link active text-light" aria-current="page" >services</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/portfolio" class="nav-link active text-light" aria-current="page" >portfolio</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/contact" class="nav-link active text-light" aria-current="page" >Contact</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" >mentions légales</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;