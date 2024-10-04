import { Card } from './Card'

export const ContainerCards = ({ banderas }) => {

    return (
        <section className='cards container'>

            {banderas.length > 0 ? (
                banderas.map ( (el, index) => (
                                                <Card key={index} el={el} />
                                              )
                             )
                ) : (<h2><b>no hay datos de banderas</b> </h2>)
            }

        </section>
    )

}

