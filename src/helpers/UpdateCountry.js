import Api from "./api_routes";

export const updateCountry=(name, value,cb) =>{
    if (name === "search_country") {
      if (value === "" || value === null) {
        cb(`${Api.GETALL}`);
      } else {
        cb(`${Api.SEARCH}${value}`);
      }
    }
  }