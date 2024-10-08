import { useParams } from "react-router-dom"
import { useEffect } from "react";
import {ContainerDetalles} from "./ContainerDetalles";
import { Btnregresar } from "./Btnregresar";
import Api from "../helpers/api_routes";

export function MainDetalles({banderas, error, setUrl }) {

    const {text} =useParams();
    let detalles = banderas[0];

    // console.log(text)
    let apiurl = `${Api.SEARCH}${text}`;
    // console.log(apiurl) 
    
    useEffect(() => {
        setUrl(apiurl); 
      }, [text, setUrl, apiurl]);

     

    return (
      <>
        <Btnregresar />

        <main className='main' id='main'>
                
              {banderas && <ContainerDetalles detalles={detalles}  />}
                
              {error && <h1>Hubo un error en la api </h1>}

        </main>
      </>
    )
  }
  