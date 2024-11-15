import { useState } from "react";
import { OptionsData } from "./optionSelect";
import { updateCountry } from "../helpers/UpdateCountry.js";
import { updateSelected } from "../helpers/UpdateSelected.js";

const initialForm = {
  search_country: "",
  search__selected: "",
};

export function Form({ setUrl }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    updateSelected(e.target.name, e.target.value, setUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    updateCountry(
      e.target.search_country.name,
      e.target.search_country.value,
      setUrl
    );
  };
  return (
    <form onSubmit={handleSubmit} action="post" className="search__form">
      <div className="search_input">
        <figure className="lupa_container">
          <img src="/lupa.png" alt="search" className="lupa__icon"></img>
        </figure>

        <input
          type="search"
          value={form.search}
          placeholder="Search for a country..."
          id="search_country"
          name="search_country"
          className="input searchs"
        />
      </div>

      <select
        className="select input"
        onChange={handleChange}
        id="search__selected"
        value={form.search__selected}
        name="search__selected"
      >
        {OptionsData.map((el) => (
          <option key={el.value} className="options" value={el.value}>
            {el.label}
          </option>
        ))}
      </select>
    </form>
  );
}
