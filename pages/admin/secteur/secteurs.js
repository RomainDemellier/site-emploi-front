import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

import Secteur from '../../../components/secteur/secteur'
import CreateSecteurModal from '../../../components/secteur/createSecteurModal'

export async function getStaticProps(context) {
    const result = await fetch('http://localhost:8080/admin/secteurs')
    const secteursProp = await result.json()
    return {
        props: {secteursProp},
    }
}

export default function Secteurs({secteursProp}) {

    const [secteurs, setSecteurs] = useState(secteursProp)

    async function getSecteurs() {
        const result = await fetch('http://localhost:8080/admin/secteurs')
        const sec = await result.json()
        setSecteurs(sec)
    }

    async function deleteSecteur(secteurId) {
        const res = await fetch(
            'http://localhost:8080/admin/secteurs/' + secteurId,
            {
                method: 'DELETE'
            }
        )
        getSecteurs()
    }

    const secteursList = secteurs
        .map((secteur) => {
            return (
                <Secteur key={secteur.id} secteur={secteur} deleteSecteur={deleteSecteur}></Secteur>
            )
        })
    return (
        <>
            <h1 className="text-center">
                Secteurs
            </h1>
            <div className="container">
                <div className="w-50 m-auto d-flex justify-content-end p-2">
                    <CreateSecteurModal refreshSecteurs={getSecteurs}></CreateSecteurModal>
                </div>
                <ul className="list-group w-50 m-auto">
                    {secteursList}
                </ul>
            </div>
        </>
    )
}