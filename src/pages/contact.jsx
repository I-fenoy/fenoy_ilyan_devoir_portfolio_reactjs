import "./assets/contact.css"

const Contact = () => {
    return (
        <main>
            <h1 className="services">Contact</h1>
            <p className="p-services">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>

            <div className="line"></div>

            <section className="contact-section">
                <form action="post">
                    <input type="text" class="form-control" placeholder="Votre nom"></input>
                    <input type="text" class="form-control" placeholder="Votre adresse mail"></input>
                    <input type="text" class="form-control" placeholder="Votre numéro de téléphone"></input>
                    <input type="text" class="form-control" placeholder="Sujet"></input>
                    <textarea class="form-control" placeholder="Votre message"></textarea>
                    <button type="button" class="btn btn-primary">Envoyer</button>
                </form>
            </section>
        </main>
    )
}

export default Contact;