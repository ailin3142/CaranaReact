import React from "react"
import { Link } from "react-router-dom"

export default function Item({item}) {
    return(
        <div class="card">
            <img src={ item.pictureUrl} alt="item" width={120} height={120} />
            <div>Producto: {item.title}<br></br> Precio: {item.price} <br></br>Stock: {item.cantidad}</div>
            <Link to={'/detalle'}>
                <button> Ver detalle</button> 
            </Link>
        </div>
    )
}