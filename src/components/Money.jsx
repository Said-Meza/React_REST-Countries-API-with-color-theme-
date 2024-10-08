
export const Money = ({ money }) => {

    let currencies = [];

    // console.log(money)

    for (const clave in money) {
        if (money.hasOwnProperty(clave)) {
            currencies.push(money[clave].name); 
        }
    }
        if(!currencies){
           return <span className=" currencies">dont have money</span> 

        }
    return (
        <h4 className="card__bold">Currencies: 
            <span className=" currencies"> {currencies.join(", ")} </span> 
        </h4>
    )
}

