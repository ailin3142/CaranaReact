import React from "react"
import { Link } from "react-router-dom"

export default function Item({item}) {
    return(
        <div className="card">
            <img src={ item.url} alt="item" width={120} height={120} />
            <div>Producto: {item.descripcion}<br></br> Precio: {item.precio} <br></br>Stock: {item.cantidad}</div>
            <Link to={'/producto/'+ item.id}>
                <button> Ver detalle</button> 
            </Link>
        </div>
    )
}