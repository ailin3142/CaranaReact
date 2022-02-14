import ItemCount from "./ItemCount"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../cart/CartContext";

export default function ItemDetail({ detalle }) {
    const [cantidadPedida, setCantidadPedida] = useState(0);
    const [stockActual, setStockActual] = useState(detalle.cantidad)
    const { addItem } = useContext(contexto);

    const onAdd = cantidad => {
        setCantidadPedida(cantidad);
        setStockActual(stockActual - cantidad);
        addItem(detalle, cantidad);
    };

    const colores = detalle.colores.map((color) => {
        return (
            <option key={color}> {color}</option>
        );
    });
    return (
        <>
            <div className="producto">
                <img className="imagenProducto" src={detalle.url} alt="item" />
                <ul>
                    <li>Producto: {detalle.descripcion}</li>
                    <li>Precio: {detalle.precio}</li>
                    <li>Stock: {stockActual}</li>
                    <li>Medidas: {detalle.medida}</li>
                    <li>Con tiras: {detalle.tiras}</li>
                    <li>Con estampados: {detalle.estampada}</li>
                    <li><select> {colores}</select></li>
                    {cantidadPedida === 0 ?
                        <li><ItemCount stock={detalle.cantidad} cantidadInicial={1} onAdd={onAdd} /></li>
                        :
                            <li><Link to={'/cart'}> <button> Terminar mi compra </button> </Link></li>
                    }
                </ul>
            </div>
        </>
    )
}