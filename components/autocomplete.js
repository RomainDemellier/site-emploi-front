import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import VilleSelectedContext from "../context/VilleSelectedContext";

export default function Autocomplete({villes,clickOnItem}) {
    const normalClass = "m-0 border-bottom px-1 py-2 fw-bold";
    const hoverClass = "m-0 border-bottom px-1 py-2 bg-dark text-white fw-bold";
    const [hover, setHover] = useState(false);
    
    const { villeSelected, setVilleSelected } = useContext(VilleSelectedContext);

    console.log({villeSelected,setVilleSelected})

    function handleHover(event) {
        setHover(!hover)
        event.target.className = hoverClass;
    }

    function handleLeave(event) {
        event.target.className = normalClass;
    }

    function handleClick(event) {
      const text = event.target.textContent;

      setVilleSelected(text);
    }

    // console.log(villeSelected);

    // const listeVilles = villes ? villes
    //     .map((ville,index) => {
    //         return (
    //           <VilleSelectedContext.Consumer>
    //             {({villeSelected,setVilleSelected}) => {
    //               console.log({villeSelected,setVilleSelected})
    //               return (
    //               <p key={index} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={setVilleSelected} className={normalClass}>{ville.nom} 
    //                 <small> {ville.codeDepartement}</small>
    //               </p>
    //             )}}
    //           </VilleSelectedContext.Consumer>
    //         )
    //     }) : '';

    const listeVilles = villes ? villes
    .map((ville,index) => {
        return (
          // <VilleSelectedContext.Consumer>
          //   {({villeSelected,setVilleSelected}) => {
              <p key={index} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClick} className={normalClass}>{ville.nom} 
                <small> {ville.codeDepartement}</small>
              </p>
          //   )}}
          // </VilleSelectedContext.Consumer>
        )
    }) : '';

  return (
    <>
      <div
        className="w-100 border position-absolute bg-white"
        style={{ zIndex: 1 }}
      >
        {listeVilles.length > 0 && listeVilles}
      </div>

    </>
  );
}
