import CartWidget from "./CartWidget"
import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "../cart/CartContext"

export default function NavBar() {
    const { carrito } = useContext(contexto);

    const secciones = [
        { "titulo": "Inicio", "path": "/" },
        { "titulo": "Bolsas", "path": "/category/bolsa" },
        { "titulo": "Fundas", "path": "/category/funda" },
        { "titulo": "Mochilas", "path": "/category/mochila" }]

    const cantidadProducto = carrito.reduce(function (acc, obj) { return acc + obj.cantidad; }, 0);

    return (
        <>
            <div className="estatico">
                <ul>
                    {secciones.map(seccion => <li key={seccion.titulo}><NavLink to={seccion.path} className="navBarItem" exact activeClassName="navBarItemSeleccionado"> {seccion.titulo} </NavLink></li>)}
                    {carrito.length > 0 ? <CartWidget buys={cantidadProducto} /> : <></>}
                </ul>
            </div>
        </>
    )
}