import React, { useContext } from "react"
import { contexto } from "../cart/CartContext";

export default function Cart() {
    const { removeItem, clear, carrito } = useContext(contexto);
    const result = carrito.reduce(function (acc, obj) { return acc + obj.precio * obj.cantidad; }, 0);

    return (
        <div className="greeting">
            <h1> Carrito </h1>
            <ul>
                {carrito.map(producto =>
                    <li>
                        <div className="controles">
                            <button style={{
                                backgroundImage: "url('https://png.pngitem.com/pimgs/s/200-2009349_transparent-trash-icon-png-trash-icon-png-png.png')",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: 24,
                                height: 24
                            }} onClick={() => { removeItem(producto.id) }}></button>
                            <ul>
                                <li>{producto.descripcion}</li>
                                <li>Cantidad: {producto.cantidad}</li>
                                <li>Precio Unitario{producto.precio}</li>
                            </ul>
                        </div>
                    </li>)}
            </ul>
            <h2>Precio Total: {result}</h2>
            <button onClick={clear}> Eliminar todo el carrito </button>
        </div>
    )
}