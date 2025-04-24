import "./assets/home.css"

const Home = () => {
    return (
        <main>
            <section className="first-section">
                <div className="div-presentation">
                    <h2> Bonjour, je suis <strong>John Doe</strong></h2>
                    <p>Développeur web full stack</p>
                </div>
                <button type="button" class="btn btn-danger">En savoir plus</button>

            </section>
        </main>
    )
}

export default Home;