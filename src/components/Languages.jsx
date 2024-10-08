
export const Languages = ({ lenguaje }) => {

    // console.log(props)
    let lengua = [],
        idiomas = "";

    for (const clave in lenguaje) {
        if (lenguaje.hasOwnProperty(clave)) {
            lengua.push(clave)
        }
    }

    for (let i = 0; i < lengua.length; i++) {
        idiomas += " " + lenguaje[`${lengua[i]}`];
    }
    if(!idiomas){
        return  <h4 className="card__bold">Languages: <span className=" languaje"> No Languages </span> </h4>
    }

    return (
        <h4 className="card__bold">Languages: <span className=" languaje">{idiomas} </span> </h4>
    )
}

