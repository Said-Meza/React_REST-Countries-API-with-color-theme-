import { useState } from "react"
import { OptionsData } from "./optionSelect"
import Api from "../helpers/api_routes"

const initialForm = {
    search_country: "",
    search__selected: "",
}


export function Form({ setUrl }) {

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        actualizarlink(e.target.value, e.target.name);

    }

    const Handleclick = () => {
        setForm(initialForm)
    }

    function actualizarlink(param, param2) {

        if (param2 === "search__selected") {
            let url__region = `${Api.REGION}${param}`
            setUrl(url__region)
        } else {
            // setForm(initialForm.search__selected)
            let url__search = `${Api.SEARCH}${param}`
            setUrl(url__search)
        }
    }

    return <form action="#" className="search__form">
        <div className="search_input">

            <figure className="lupa_container">
                <img src="/lupa.png" alt="search" className="lupa__icon"></img>
            </figure>

            <input type="search"
                onClick={Handleclick}
                onSubmit={(e) => { e.preventDefault() }}
                value={form.search}
                onChange={handleChange}
                placeholder="Search for a country..."
                id="search_country" name="search_country"
                className="input searchs"
            ></input>

        </div>

        <select
            className="select input"
            onChange={handleChange}
            id="search__selected" value={form.search__selected}
            name="search__selected"
        >
            {OptionsData.map((el) => (<option key={el.value} className="options" value={el.value}> {el.label}</option>))}

        </select>
    </form>
}