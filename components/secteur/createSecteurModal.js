import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import CreateSecteur from './createSecteur';

export default function CreateSecteurModal({refreshSecteurs}) {

    const [show,setShow] = useState(false)

    function showModal() {
        setShow(true)
    }

    function closeModal() {
        setShow(false)
        refreshSecteurs()
    }

    return (
        <>
            <FontAwesomeIcon onClick={showModal} icon={faPlus}/>
            <Modal show={show} onHide={closeModal} centered>
                <Modal.Body>
                    <CreateSecteur close={closeModal}></CreateSecteur>
                </Modal.Body>
            </Modal>
        </>
    )
}