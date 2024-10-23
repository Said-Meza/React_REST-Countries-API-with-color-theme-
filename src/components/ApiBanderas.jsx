import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Headers } from './Header'
import { Main } from './Main'
import { MainDetalles } from './MainDetalles'
import { Error404 } from './Error404'

//data={data} err={err} setUrl={setUrl} loading={loading}

export function ApiBanderas() {

    return (
        <>
            <Headers />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detalles/:text" element={<MainDetalles />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
