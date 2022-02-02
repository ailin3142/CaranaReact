import React, { useContext } from "react"
import { contexto } from "../cart/CartContext";

export default function Cart() {
    const { removeItem, clear, carrito } = useContext(contexto);

    return (
        <div className="greeting">
            <h1> Carrito </h1>
            <ul>
                {carrito.map(producto =>
                    <li>
                        <div>
                            <h1>{producto.descripcion} {producto.cantidad} </h1>
                            <button style={{
                                backgroundImage: "url('https://png.pngitem.com/pimgs/s/200-2009349_transparent-trash-icon-png-trash-icon-png-png.png')",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: 24,
                                height: 24
                            }} onClick={removeItem(producto.id)}></button>
                        </div>
                    </li>)}
            </ul>
            <button onClick={clear}> Eliminar todo el carrito </button>
        </div>
    )
}