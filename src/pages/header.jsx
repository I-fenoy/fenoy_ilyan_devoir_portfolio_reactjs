import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark nav-header">
                <div className="container-fluid">
                    <h1 className="navbar-brand text-light" ><a href="#" data-bs-toggle="modal" data-bs-target="#monModal">JOHN DOE</a></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse div-nav-link" id="navbarTogglerDemo02">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-light" aria-current="page" >Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/services" className="nav-link active text-light" aria-current="page" >services</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link active text-light" aria-current="page" >portfolio</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active text-light" aria-current="page" >Contact</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/legalsnotices' className="nav-link active text-light" aria-current="page" >mentions légales</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div class="modal fade" id="monModal" tabindex="-1" aria-labelledby="monModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content  bg-dark">
                        <div class="modal-header">
                            <h5 class="modal-title" id="monModalLabel">Titre du Modal</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                        </div>
                        <div class="modal-body">
                            Contenu du modal ici.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" class="btn btn-primary">Enregistrer</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;