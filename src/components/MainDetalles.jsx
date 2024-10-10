import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useApiCountries } from "../hooks/useApiCountries";

import Api from "../helpers/api_routes";

import { Btnregresar } from "./Btnregresar";
import {ContainerDetalles} from "./ContainerDetalles";
import { Error404 } from "./Error404";

export function MainDetalles() {
    const [url, setUrl] = useState("")
    const {text} =useParams();

    useEffect(() => {
      setUrl(`${Api.SEARCH}${text}`);
    }, [text])
    
    const {data, err, loading} = useApiCountries(url);

    return (
      <>
        <Btnregresar />

        <main className='main' id='main'>
                
              {data && <ContainerDetalles detalles={data[0]}  />}
                
              {err && <Error404 />}

        </main>
      </>
    )
  }
  