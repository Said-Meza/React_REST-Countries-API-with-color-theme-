import { Form } from './Form'
import { ContainerCards } from './ContainerCards'
import { Error404 } from './Error404';
import { Loader } from './Loader'

export function Main({data, err, setUrl,loading}) {

    return (
      <>
        <main className='main' id='main'>
            <Form  setUrl={setUrl} />
            
              {loading && <Loader/>}
              {data && <ContainerCards data={data}  />}

              {err && <Error404 />}
           

        </main>
      </>
    )
  }
  