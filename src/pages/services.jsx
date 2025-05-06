import "./assets/services.css"
import banner from "../images/banner.jpg"
import brush from "../images/services/brush.svg"
import codeslash from "../images/services/code-slash.svg"
import search from "../images/services/search.svg"

const Services = () => {
    return (
        <main>
            <img src={banner} className="bg-img"></img>
            <h1 className="services">Mon offre de services</h1>
            <p className="p-services">Voici les prestations sur lesquelles je peux intervenir</p>
            <div className="line"></div>

            <section className="services-section">
                <div className="card" >
                    <img src={brush} className="card-img-top"  ></img>
                    <div className="card-body">
                        <h2 className="card-title">UX Design</h2>
                        <p className="card-text">L'UX Design est une discipline qui consiste à concevoir
                            des produits (sites web, applications mobiles, logiciels,
                            objets connectes, etc.) en placant l'utilisateur au centre
                            des préoccupations. L'objectif est de rendre l'expérience
                            utilisateur la plus fluide et agréable possible.</p>
                    </div>
                </div>

                <div className="card" >
                    <img src={codeslash} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Développement web</h2>
                        <p className="card-text">Le développement de sites web consiste à créer des
                            sites internet en utilisant des langages de programmation
                            (HTML, CSS, JavaScript, PHP, etc.) et des frameworks
                            (Bootstrap, React, Angular, etc.).</p>
                    </div>
                </div>

                <div className="card" >
                    <img src={search} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">Referencement</h2>
                        <p className="card-text">Le référencement naturel (SEO) est une technique qui
                            consiste a optimiser un site web pour le faire remonter
                            dans les résultats des moteurs de recherche (Google,
                            Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de
                            visiteurs qualifies sur le site.</p>
                    </div>
                </div>


            </section>
        </main>
    )
}

export default Services;