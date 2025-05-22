import { useState, useEffect } from 'react';
import "./assets/modal.css"





const Modal = () => {

    const [user, setUser] = useState([]);

    const getUser = async () => {
        const res = await fetch('https://api.github.com/users/github-john-doe');
        const json = await res.json();
        setUser(json);
        console.log(json)
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div class="modal fade" id="monModal" tabindex="-1" aria-labelledby="monModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content  bg-dark">
                    <div class="modal-header">
                        <h3 class="modal-title" id="monModalLabel">Mon profil GitHub</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <img src={user.avatar_url} alt="#" /><br />
                            <a href="#">{user.name}</a>
                        </div>
                        <div>

                        </div>
                        <div>
                            <p>{user.bio} </p>
                        </div>
                        <div>
                            <p>Repositories : {user.public_repos} </p>
                        </div>
                        <div>
                            <p>Followers : {user.followers}</p>
                        </div>
                        <div>
                            <p>Following : {user.following} </p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Modal;