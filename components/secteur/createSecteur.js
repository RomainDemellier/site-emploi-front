import 'bootstrap/dist/css/bootstrap.css'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CreateSecteur({close}) {

    const registerSecteur = async event => {
        event.preventDefault()
        const nom = event.target.nom.value
        
        const res = await fetch(
            'http://localhost:8080/admin/secteurs',
            {
                body: JSON.stringify({nom}),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
        close()
        // console.log("test")
        // Router.push("secteurs")
    }

    return (
        <>
        <div className="d-flex flex-row-reverse">
                <FontAwesomeIcon className="fa-xs" icon={faTimes} onClick={close}/>
        </div>
        <h1 className="text-center mb-4 position-relative">
            Créer un secteur
             </h1>
        <div className="container">
            <form onSubmit={registerSecteur} className="w-50 m-auto">
                <div className="form-group mb-4">
                    <input id="nom" name="nom" type="text" placeholder="Saisissez un nom" autoComplete="name" className="form-control" required />
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">Enregistrer</button>
                </div>
            </form>
        </div>
        </>
    )
}