import { BorderContries } from "./BorderContries";
import { Languages } from "./Languages";
import { Money } from "./Money";



export const ContainerDetalles = ({ detalles }) => {


    if (!detalles) {
        return <p>Cargando detalles...</p>;
    }

    let border=detalles.borders;
    let money=detalles.currencies;
    let lenguaje=detalles.languages;



    // console.log(detalles.name["common"])
    return <section className="content_container container" >

        <figure className="content__figure">
            <img className="content__img" src={detalles.flags.svg} alt="flag__country" />
        </figure>



        <section className="card__texts">

            <h2 className="card__title" id="country">{detalles.name.common}</h2>

            <section className="content content1">

                <h4 className="card__bold">Native Name: <span className=" name">{detalles.name.official}</span></h4>
                <h4 className="card__bold">Populacion: <span className=" population">{detalles.population}</span></h4>
                <h4 className="card__bold">Region: <span className=" region">{detalles.region}</span> </h4>
                <h4 className="card__bold">Sub Region: <span className=" subregion">{detalles.subregion}</span> </h4>
                <h4 className="card__bold">Capital: <span className=" capital">{detalles.capital}</span></h4>
            </section>

            <section className="content content2">
                <h4 className="card__bold">Top Level Domain: <span className="card__fields__letter domain">{detalles.tld}</span></h4>
                
                {/* <h4 className="card__bold">Currencies: <span className=" currencies"> </span> </h4> */}

                <Money money={money} />

               <Languages lenguaje={lenguaje} />

            </section>

            <section className="content content3">

                <h3 className="card__bold">Border Contries: <span className="card__bold"> </span> </h3>

                <div className="other__container">

                    {border && <BorderContries border={border} />}
                    {!border && <h5 data-dark-element className="morepaises" > No has Border Countries </h5> }
                    

                </div>
            </section>
        </section>

    </section>
}
