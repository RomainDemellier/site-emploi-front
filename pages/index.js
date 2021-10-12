import Link from "next/link";
import Card from "../components/card";
import VilleSelectedContext from "../context/VilleSelectedContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import Autocomplete from "../components/autocomplete";
import { useContext, useEffect, useState } from "react";

import { setVilles, getVilles } from '../service/villes'
import { func } from "prop-types";

// export async function getStaticProps(context) {
//   if(!getVilles()) {
//     console.log("Pas de villes");
//     const result2 = await fetch(`https://geo.api.gouv.fr/communes`);
//     const data = await result2.json()
//     const villes = data.sort((v1,v2) => v2.population - v1.population);
//     setVilles(villes);
//     return {
//       props: {villes}, // will be passed to the page component as props
//     }
//   } else {
//     console.log("villes");
//     const villes = getVilles()
//     return {
//       props: { villes }
//     }
//   }
// }

export default function Home(props) {

  
  const [searchValue,setSearchValue] = useState('');
  const [villes, setVilles] = useState([]);
  const [filterVille,setFilterVille] = useState('')
  const [hasClickOnItem,setHasClickOnItem] = useState(false);

  useEffect(() => {
    window.addEventListener('click',clickOnWindow);

    return () => {
      window.removeEventListener('click',clickOnWindow);
    }
  }, [])

  // useEffect(() => {
  //   setSearchValue(filterVille)
  // },[filterVille])

  const cards = ['Paris','Marseille','Paris','Marseille','Paris','Marseille','Paris','Marseille','Paris','Marseille']
    .filter((card) => !filterVille || card.toLowerCase() === filterVille.toLowerCase())
    .map((card,index) => {
    return (
      <div className="col-4">
        <Card
          key={index}
          title={"Societe " + index}
          textAnnonce={"Texte de l'annonce " + index}
          ville={ card }
          salaire={index * 1000}
        ></Card>
      </div>
    );
  });

  function clickOnWindow() {
    setVilles([])
  }

  
  
  async function searchVille(event) {;
    const inputValue = event.target.value
    inputValue ? '' : setFilterVille('');
    setSearchValue(inputValue);
    calculListeVilles(inputValue)
    // if(inputValue.length === 0) {
    //   setFilterVille('')
    // }
    // const inputValue = event.target.value;
    // setSearchValue(inputValue);

    // calculListeVilles(inputValue);
  }

  async function calculListeVilles(inputValue) {
    const result = inputValue ? await fetch(`https://geo.api.gouv.fr/communes?nom=${inputValue}&boost=population&limit=10`) : undefined;
    const data = result ? await result.json() : [];
    setVilles(data);
  }

  function onClickInput(event){
    console.log({searchValue})
    searchValue ? calculListeVilles(searchValue) : '';
    // searchValue ? setFilterVille(searchValue) : '';

    event.stopPropagation();
  }

  function clickOnItem(event) {
    setHasClickOnItem(true)
    const text = event.target.textContent;
    setSearchValue(text)
    const villeName = text.split(' ')[0]
    setFilterVille(villeName)
    setVilles([])
  }

  function test(str) {
    setSearchValue(str)
    const ville = str.split(' ')[0];
    setFilterVille(ville);
  }

  const contextValue = {
    villeSelected: filterVille,
    setVilleSelected: test
  }


  return (
    <>
      <VilleSelectedContext.Provider value={contextValue}>
        <Link href="/hello/hello">
          <a>Lien vers hello</a>
        </Link>
        <div className="text-center mt-4">
        {/* <FontAwesomeIcon icon={faDownload} /> */}
          <div className="w-25 m-auto">
          <div className="w-75 m-auto position-relative">
            <input value={searchValue} className="w-100 text-center form-control" type="text" onChange={searchVille} onClick={onClickInput}></input>
            <Autocomplete clickOnItem={clickOnItem} villes={villes}></Autocomplete>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-start row px-4 m-4">{(cards.length > 0 && cards) || <h1 className="text-center">Pas d'annonce dans cette ville</h1>}</div>
        </div>
      </VilleSelectedContext.Provider>
    </>
  );
}
