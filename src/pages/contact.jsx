import "./assets/contact.css"

const Contact = () => {
    return (
        <main>
            <h1 className="services">Contact</h1>
            <p className="p-services">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>

            <div className="line"></div>

            <section className="contact-section">
                <div className="div-contact" >
                    <h2 className="contact-h2">Formulaire de contact</h2>
                    <form action="post" className="contact-form">
                        <input type="text" class="form-control" placeholder="Votre nom"></input>
                        <input type="text" class="form-control" placeholder="Votre adresse mail"></input>
                        <input type="text" class="form-control" placeholder="Votre numéro de téléphone"></input>
                        <input type="text" class="form-control" placeholder="Sujet"></input>
                        <textarea class="form-control" placeholder="Votre message" rows={15}  ></textarea>
                        <button type="button" class="btn btn-primary">Envoyer</button>
                    </form>
                </div>


                <div className='info-contact'>
                    <h2 className="contact-h2">Mes coordonées</h2>
                    <address>
                        <h3 className='d-block'>John Doe</h3>
                        <a href='https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D' target='_blank' className='d-block'>40 rue Laure Diebold<br /> 69009 Lyon, France</a>
                        <a href='tel:1020304050' target='_blank' className='d-block'>10 20 30 40 50</a>
                        <a href='mailto:john.doe@gmaiil.com' target='_blank' className='d-block'>john.doe@gmail.com</a>
                    </address>
                    <div style={{ width: '100%', height: '400px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1746086254015!5m2!1sfr!2sf"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>

                </div>
            </section>
        </main >
    )
}

export default Contact;