import { useState } from 'react';
import { useApiCountries } from '../hooks/useApiCountries'

import Api from '../helpers/api_routes'

import { Form } from './Form'
import { ContainerCards } from './ContainerCards'
import { Error404 } from './Error404';
import { Loader } from './Loader'


export function Main() {

  const [url, setUrl] = useState(Api.GETALL)

  

  const { data, err, loading } = useApiCountries(url);

  return (
    <>
      <main className='main' id='main'>

        <Form setUrl={setUrl} />

        {loading && <Loader />}

        {data && <ContainerCards data={data} />}

        {err && <Error404 />}


      </main>
    </>
  )
}
