import { Main } from './Main'
import { Headers } from './Header'
import { ContainerCards } from './ContainerCards'
import { helpHttp } from '../helpers/helphttp'
import Api from '../helpers/api_routes'
import { useEffect, useState } from 'react'


export function ApiBanderas() {

    const [banderas, setBanderas] = useState([]);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true)

   
    useEffect(() => {
            let dataBanderas = helpHttp();
            let getAllUrl =  Api.GETALL;

            dataBanderas.get(getAllUrl).then((res)=>{
                if(!res.err){
                    // console.log(res)
                    setBanderas(res);
                    setError(null);
                }else{
                    setBanderas(null)
                    setError(res);
                }
            })
            
    }, [])
    



    return (
      <>
       <Headers /> 
  
       <Main/>

        
            {banderas && <ContainerCards banderas={banderas} />}

            {error && <h1>Hubo un error en la api </h1>}
        

       
  
    
      </>
    )
  }
  