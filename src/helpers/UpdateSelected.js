import Api from "./api_routes";

export const updateSelected=(name, value,cb)=> {
    if (name === "search__selected") {
      if (value === "getall") {
        cb(`${Api.GETALL}`);
      } else {
        cb(`${Api.REGION}${value}`);
      }
    }
  }