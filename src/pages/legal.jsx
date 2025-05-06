import "./assets/legal_notices.css";

const Legalnotices = () => {
    return (
        <main>
            <h1 className="services">Mentions légales</h1>

            <div className="line"></div>

            <section>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Editeur du site
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <h2>John Doe</h2> <br />
                                <address className="legal-address">
                                    <a href='https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D' target='_blank' className='d-block a-address'>40 rue Laure Diebold<br /> 69009 Lyon, France</a>
                                    <a href='tel:1020304050' target='_blank' className='d-block a-address' >10 20 30 40 50</a>
                                    <a href='mailto:john.doe@gmaiil.com' target='_blank' className='d-block a-address'>john.doe@gmail.com</a>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Hébergeur
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <h2>alwaysdata</h2><br />
                                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <a href="https://www.alwaysdata.com/fr/" className="a-host-credits">www.alwaysdata.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Crédits
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <h2>Crédits</h2>
                                <p>Ce site a ete realise par John Doe, etudiant au <a href="" className="a-host-credits">Centre
                                    Européen de formation.</a></p>

                                <p>Les images utilisees sur ce site sont libres de droits et
                                    ont ete obtenues sur le site <a href="" className="a-host-credits">Pixabay</a></p>

                                <p>La favicon de ce site a ete fournie par <a href="" className="a-host-credits">John doe Icons
                                    erstellt von Freepik - Flaticon</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )


}

export default Legalnotices;