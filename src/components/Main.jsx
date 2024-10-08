import { Form } from './Form'
import { ContainerCards } from './ContainerCards'

export function Main({banderas, error, setUrl }) {

    return (
      <>
        <main className='main' id='main'>
            <Form  setUrl={setUrl} />

              {banderas && <ContainerCards banderas={banderas}  />}

              {error && <h1>Hubo un error en la api </h1>}

        </main>
      </>
    )
  }
  