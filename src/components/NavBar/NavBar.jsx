import CartWidget from "./CartWidget"
import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    const secciones = [
        {"titulo":"Inicio","path":"/"},
        {"titulo":"Bolsas","path":"/category/bolsa"},
        {"titulo":"Fundas","path":"/category/funda"},
        {"titulo":"Mochilas","path":"/category/mochila"}]

    return(
        <>
        <div class="estatico">
            <ul>
                {secciones.map(seccion => <li><NavLink to={seccion.path} class="navBarItem" activeClassName="navBarItemSeleccionado"> {seccion.titulo} </NavLink></li>)}
                <CartWidget buys={'0'}/>
            </ul>
	    </div>
        </>
    )
}