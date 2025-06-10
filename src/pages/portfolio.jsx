import "../pages/assets/portfolio.css"
import banner from "../images/banner.jpg"
import freshfood from "../images/portfolio/fresh-food.jpg"
import akira from "../images/portfolio/restaurant-japonais.jpg"
import bienetre from "../images/portfolio/espace-bien-etre.jpg"
import seo from "../images/portfolio/seo.jpg"
import api from "../images/portfolio/coder.jpg"
import maquette from "../images/portfolio/screens.jpg"

const Portfolio = () => {
    return (
        <main>
            <img src={banner} className="bg-img"></img>
            <h1 className="services">Portfolio</h1>
            <p className="p-services">Voici quelques-unes de mes réalisations</p>

            <div className="line"></div>

            <section className="porfolio-section">
                <div className="card">
                    <img src={freshfood} className="card-img" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Fresh Food</h2>
                        <p className="card-text">Site de vente de produits frais en ligne</p>
                        <a href="#" className="btn btn-primary">voir le site</a>
                    </div>
                    <div className="card-use">
                        <p className="use-text">Site réalisé avec PHP et MySQL</p>
                    </div>
                </div>

                <div className="card">
                    <img src={akira} className="card-img" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Restaurant Akira</h2>
                        <p className="card-text">Site de vente de produits frais en ligne</p>
                        <a href="#" className="btn btn-primary">voir le site</a>
                    </div>
                    <div className="card-use">
                        <p className="use-text">Site réalisé avec WordPress</p>
                    </div>
                </div>

                <div className="card">
                    <img src={bienetre} className="card-img" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Espace bien-être</h2>
                        <p className="card-text">Site de vente de produits frais en ligne</p>
                        <a href="#" className="btn btn-primary">voir le site</a>
                    </div>
                    <div className="card-use">
                        <p className="use-text">Site réalisé avec LARAVEL</p>
                    </div>
                </div>

                <div className="card">
                    <img src={seo} className="card-img" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">SEO</h2>
                        <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                        <a href="#" className="btn btn-primary">voir le site</a>
                    </div>
                    <div className="card-use">
                        <p className="use-text">Utilisation des outils SEO</p>
                    </div>
                </div>

                <div className="card">
                    <img src={api} className="card-img" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Création d'une API</h2>
                        <p className="card-text">Création d'une API RESTFULL publique</p>
                        <a href="#" className="btn btn-primary">voir le site</a>
                    </div>
                    <div className="card-use">
                        <p className="use-text">PHP - SYMFONY </p>
                    </div>
                </div>

                <div className="card">
                    <img src={maquette} className="card-img" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Maquette d'un site web</h2>
                        <p className="card-text">Création du prototype d'un site</p>
                        <a href="#" className="btn btn-primary">voir le site</a>
                    </div>
                    <div className="card-use">
                        <p className="use-text">Réalisé avec FIGMA </p>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Portfolio;