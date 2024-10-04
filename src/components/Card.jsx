
export const Card = ({ el }) => {
    // console.log(el)
    return <article className="card">

        <a className="card__link" href={`#/query=${el.name.common}`}>


            <figure className="card__figure">
                <img className="card__img" src={el.flags.svg} alt="flag__country" />
            </figure>

            <section className="card__texts">

                <h3 className="card__title">{el.name.common}</h3>

                <h4 className="card__bold ">Populacion:
                    <span className="card__populacion card__result">{el.population}</span>
                </h4>
                <h4 className="card__bold ">Region:
                    <span className="card__Region card__result">{el.region}</span>   
                </h4>
                <h4 className="card__bold ">Capital:
                    <span className="card__capital card__result">{el.capital}</span>   
                </h4>

            </section>
        </a>
    </article >
  
}
