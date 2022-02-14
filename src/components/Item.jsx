import React from "react"
import { Link } from "react-router-dom"
import Especificacion from "./itemDetail/Especificacion"

export default function Item({ item }) {
    return (
        <div className="card">
            <img src={item.url} alt="item" width={120} height={120} />
            <ul className="detalleProducto">
                <li><Especificacion titulo="Producto:" descripcion={item.descripcion} /></li>
                <li><Especificacion titulo="Precio:" descripcion={item.precio} /></li>
                <li><Especificacion titulo="Stock:" descripcion={item.cantidad} /></li>
            </ul>
            <Link to={'/producto/' + item.id}>
                <button className="botonOscuro"> Ver detalle</button>
            </Link>
        </div>
    )
}