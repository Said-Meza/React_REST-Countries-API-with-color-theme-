import { Card } from './Card'

export const ContainerCards = ({ data }) => {

    return (
        <section className='cards container'>

            {data.length > 0 ? (
                data.map ( (el, index) => (
                                                <Card key={index} el={el} />
                                              )
                             )
                ) : (<h2><b>No hay datos de banderas</b> </h2>)
            }

        </section>
    )

}

