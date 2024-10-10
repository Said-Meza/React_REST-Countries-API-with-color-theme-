import { Form } from './Form'
import { ContainerCards } from './ContainerCards'
import { Error404 } from './Error404';

export function Main({data, err, setUrl }) {

    return (
      <>
        <main className='main' id='main'>
            <Form  setUrl={setUrl} />

              {data && <ContainerCards data={data}  />}

              {err && <Error404 />}
           

        </main>
      </>
    )
  }
  