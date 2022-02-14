import ItemCount from "./ItemCount"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../cart/CartContext";
import Especificacion from "./Especificacion";

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
                <ul className="detalleProducto">
                    <li><Especificacion titulo="Producto:" descripcion={detalle.descripcion} /></li>
                    <li><Especificacion titulo="Precio:" descripcion={detalle.precio} /></li>
                    <li><Especificacion titulo="Stock:" descripcion={stockActual} /></li>
                    <li><Especificacion titulo="Medidas:" descripcion={detalle.medida} /></li>
                    <li><Especificacion titulo="Con tiras:" descripcion={detalle.tiras} /></li>
                    <li><Especificacion titulo="Con estampados:" descripcion={detalle.estampada} /></li>
                    <li><select> {colores}</select></li>
                    {cantidadPedida === 0 ?
                        <li><ItemCount stock={detalle.cantidad} cantidadInicial={1} onAdd={onAdd} /></li>
                        :
                        <li><Link to={'/cart'}> <button className="botonOscuro"> Terminar mi compra </button> </Link></li>
                    }
                </ul>
            </div>
        </>
    )
}