import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from 'react-bootstrap';
import { useState } from 'react';


export default function Secteur({secteur,deleteSecteur}) {

    const [openCollapse,setOpenCollapse] = useState(false)
    const [posteList,setPosteList] = useState(secteur.posteList)    

    const postes = posteList
        .map((poste) => {
            return (
                <div>
                    {poste.intitule}
                </div>
            )
        })

    function click() {
        deleteSecteur(secteur.id)
    }

    function handleClick() {

        setOpenCollapse(!openCollapse)
    }

    return (
        <>        
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={handleClick}>
                {secteur.nom}
                <FontAwesomeIcon onClick={click} className="text-danger" icon={faTrash} title={"Supprimer " + secteur.nom}/>
            </li>
            <Collapse in={openCollapse}>
                <div>
                   {postes} 
                </div>
                
            </Collapse>
        </>
    )
}