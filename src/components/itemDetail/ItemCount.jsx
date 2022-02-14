import {useState} from "react"
import React from "react"

export default function ItemCount({stock, cantidadInicial, onAdd}) {
    const [cantidadActual, setCantidadActual] = useState(cantidadInicial)

    const funcionDisminuir = () => {setCantidadActual(cantidadActual > cantidadInicial ? cantidadActual-1 : cantidadInicial)}
    const funcionIncrementar = () => {setCantidadActual(cantidadActual < stock ? cantidadActual+1 : stock)}
    const funcionAgregarCarrito = () => onAdd(cantidadActual)
    
    return(
        <>
            <div className="itemCountContainer">
                <div className="controles">
                    <button className="botonOscuro" type="button" onClick={funcionDisminuir}>-</button>
                    <p>{cantidadActual}</p>
                    <button className="botonOscuro" type="button" onClick={funcionIncrementar}>+</button>
                </div>
                <button className="botonOscuro" type="button" onClick={funcionAgregarCarrito}>Agregar al carrito</button>
            </div>
        </>
    )
}