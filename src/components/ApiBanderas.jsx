import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useApiCountries } from '../hooks/useApiCountries'
import { Main } from './Main'
import { Headers } from './Header'
import { MainDetalles } from './MainDetalles'

// import { helpHttp } from '../helpers/helphttp'
import Api from '../helpers/api_routes'
import { Error404 } from './Error404'


export function ApiBanderas() {
    const [url, setUrl] = useState("")
    
    if (url === "" || url === null) {
        setUrl(Api.GETALL)

    }
    
    const {data, err, loading} = useApiCountries(url)

    return (
        <>
            <Headers />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main data={data} err={err} setUrl={setUrl} />} />
                    <Route path="/detalles/:text" element={<MainDetalles  />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
