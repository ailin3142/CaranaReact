import CartWidget from "./CartWidget"
import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "../cart/CartContext"

export default function NavBar() {
    const secciones = [
        { "titulo": "Inicio", "path": "/" },
        { "titulo": "Bolsas", "path": "/category/bolsa" },
        { "titulo": "Fundas", "path": "/category/funda" },
        { "titulo": "Mochilas", "path": "/category/mochila" }]

    const { carrito } = useContext(contexto);
    
    return (
        <>
            <div class="estatico">
                <ul>
                    {secciones.map(seccion => <li><NavLink to={seccion.path} className="navBarItem" exact activeClassName="navBarItemSeleccionado"> {seccion.titulo} </NavLink></li>)}
                    <CartWidget buys={carrito.length} />
                </ul>
            </div>
        </>
    )
}