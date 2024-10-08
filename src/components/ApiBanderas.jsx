import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './Main'
import { Headers } from './Header'
import { MainDetalles } from './MainDetalles'

import { helpHttp } from '../helpers/helphttp'
import Api from '../helpers/api_routes'


export function ApiBanderas() {
    const [url, setUrl] = useState("")
    const [banderas, setBanderas] = useState([]);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true)

    if (url === "" || url === null) {
        setUrl(Api.GETALL)
    }


    useEffect(() => {
        let dataBanderas = helpHttp();

        dataBanderas.get(url).then((res) => {
            if (!res.err) {
                setBanderas(res);
                setError(null);
            } else {
                setBanderas(null)
                setError(res);
            }
        })

    }, [url])



    return (
        <>
            <Headers />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main setUrl={setUrl} banderas={banderas} error={error} />} />
                    <Route path="/detalles/:text" element={<MainDetalles setUrl={setUrl} banderas={banderas} error={error} />} />
                    <Route path="*" element={<h2>error pag no found</h2>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
