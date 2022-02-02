import ItemCount from "./ItemCount"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../cart/CartContext";

export default function ItemDetail({ detalle }) {
    const onAdd = cantidad => {
        setCantidadPedida(cantidad);
        alert("Se agregan " + cantidad + " al carrito de " + detalle.descripcion);
        setStockActual(stockActual - cantidad);
        addItem(detalle, cantidad);
    };
    const [cantidadPedida, setCantidadPedida] = useState(0);
    const [stockActual, setStockActual] = useState(detalle.cantidad)
    const { addItem } = useContext(contexto);

    return (
        <>
            <div class="producto">
                <img src={detalle.url} alt="item" width={200} height={250} />
                <ul>
                    <li>Producto: {detalle.descripcion}</li>
                    <li>Precio: {detalle.precio}</li>
                    <li>Stock: {stockActual}</li>
                    <li>Medidas: {detalle.medida}</li>
                    <li>Con tiras: {detalle.tiras}</li>
                    <li>Con estampados: {detalle.estampada}</li>
                    <li><select> {detalle.colores.map(color => <option>{color}</option>)}</select></li>
                    {cantidadPedida === 0 ?
                        <li><ItemCount stock={detalle.cantidad} cantidadInicial={1} onAdd={onAdd} /></li>
                        :
                            <li><Link to={'/cart'}> <button> Finalizar compra </button> </Link></li>
                    }
                </ul>
            </div>
        </>
    )
}