import CartWidget from "./CartWidget"
import React from "react"

export default function NavBar() {
    const secciones = ["Inicio", "Productos", "Contacto", "Clientes", "Puntos de Entrega"]
    return(
        <>
        <div class="estatico">
            <ul>
                {secciones.map(seccion => <li>{seccion}</li>)}
                <CartWidget buys={'0'}/>
            </ul>
	    </div>
        </>
    )
}