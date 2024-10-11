import { useEffect, useState } from "react";
import modedark from "../helpers/dark";

export function Btn_darkmode() {

        // const localdb = localStorage.getItem("dark") 

        const [dark, setdark] = useState(() => {
                const localdb = localStorage.getItem("dark");
                return localdb === "true";
        })

        useEffect(() => {

                if (dark) {
                        modedark.dark()
                        localStorage.setItem("dark", "true")
                }
                else {
                        modedark.light()
                        localStorage.setItem("dark", "false")
                }
        }, [dark])


        const handledarkmode = (e) => {
                e.preventDefault();
                setdark(!dark)
        }

        return <a onClick={handledarkmode} href="#" className="nav__darkmode">
                <figure className="nav__icon">
                        <img src="/pokebal.png" className="nav__img" alt="icon__darkmode" ></img>
                </figure>
                <h5 className="nav__darktext">Dark Mode</h5>
        </a>

}