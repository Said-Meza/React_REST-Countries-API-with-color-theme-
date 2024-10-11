import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { useApiCountries } from '../hooks/useApiCountries'

import { Headers } from './Header'
import { Main } from './Main'
import { MainDetalles } from './MainDetalles'
import { Error404 } from './Error404'



import Api from '../helpers/api_routes'


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
                    <Route path="/" element={<Main data={data} err={err} setUrl={setUrl} loading={loading} />} />
                    <Route path="/detalles/:text" element={<MainDetalles  />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
