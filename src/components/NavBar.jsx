import react from "react";

export default function NavBar() {
    const secciones = ["Inicio", "Productos", "Contacto", "Clientes", "Puntos de Entrega"]
    return(
        <>
        <div class="estatico">
		<ul>
            {secciones.map(seccion => <li>{seccion}</li>)}
		</ul>
	    </div>
        </>
    )
}