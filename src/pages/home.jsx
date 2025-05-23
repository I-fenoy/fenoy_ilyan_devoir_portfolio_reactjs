import "./assets/home.css"
import john_doe_about from "../images/john-doe-about.jpg"

const Home = () => {
    return (
        <main>
            <section className="first-section">
                <div className="div-presentation">
                    <h1> Bonjour, je suis <strong>John Doe</strong></h1>
                    <h2>Développeur web full stack</h2>
                </div>
                <button type="button" className="btn btn-danger" id="btn-more" data-bs-toggle="modal" data-bs-target="#monModal">En savoir plus</button>

            </section >

            <section className='about_section'>
                <div className="section-div">
                    <h3 className="home">A propos</h3>
                    <img src={john_doe_about} className="img-fluid" ></img>
                    <p className="p-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Optio, necessitatibus consectetur tempore
                        perferendis nostrum, ex delectus reiciendis impedit
                        aut iure enim placeat? Natus, neque at?</ p>

                    <p className="p-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Optio, necessitatibus consectetur tempore
                        perferendis nostrum, ex delectus reiciendis impedit
                        aut iure enim placeat? Natus, neque at?</ p>

                    <p className="p-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Optio, necessitatibus consectetur tempore
                        perferendis nostrum, ex delectus reiciendis impedit
                        aut iure enim placeat? Natus, neque at?</p>
                </div>


                <div className="section-div">
                    <h3>Mes compétences </h3>

                    <p className="p-progress-bar" >HTML5 90%</p>
                    <div className="progress ">
                        <div className="progress-bar bg-danger " role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <p className="p-progress-bar">CSS3 80%</p>
                    <div className="progress ">
                        <div className="progress-bar bg-info " style={{ width: "80%" }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <p className="p-progress-bar">JAVASCRIPT 70%</p>
                    <div className="progress ">
                        <div className="progress-bar bg-warning " style={{ width: "70%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <p className="p-progress-bar">PHP 60%</p>
                    <div className="progress ">
                        <div className="progress-bar bg-success " style={{ width: "60%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div >

                    <p className="p-progress-bar">REACT 50%</p>
                    <div className="progress">
                        <div className="progress-bar bg-primary" style={{ width: "50%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div >
                </div>

            </section >
        </main >
    )
}

export default Home;