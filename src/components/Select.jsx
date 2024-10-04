import { OptionsData } from "./optionSelect"

export function Select(){
    return <select className="select input" id="search__selected" name="search__selected">
                { OptionsData.map( (el) => (<option key={el.value} className="options" selected={el.selected} value={el.value}> {el.label}</option>) )  }
                
            </select> 
}