import { Main } from './Main'
import { Headers } from './Header'

import { helpHttp } from '../helpers/helphttp'
import Api from '../helpers/api_routes'
import { useEffect, useState } from 'react'


export function ApiBanderas() {
    const [url, setUrl] = useState("")
    const [banderas, setBanderas] = useState([]);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true)
    
    if(url === "" || url === null){
        setUrl(Api.GETALL)
    }
    
   
    useEffect(() => {
            let dataBanderas = helpHttp();

            dataBanderas.get(url).then((res)=>{
                if(!res.err){
                    // console.log(res)
                    setBanderas(res);
                    setError(null);
                }else{
                    setBanderas(null)
                    setError(res);
                }
            })
            
    }, [url])
    
 
        

    return (
      <>
       <Headers /> 
  
       <Main setUrl={setUrl} banderas={banderas} error={error}/>

      </>
    )
  }
  