import ItemCount from "./ItemCount"
import React from "react"
export default function ItemDetail({detalle}) {
    const onAdd = cantidad => {
        alert("Se agregan " + cantidad + " al carrito de " + detalle.descripcion);
      };

    return (
        <>
            <div class="producto">
                <img src={detalle.url} alt="item" width={200} height={250} />
                <ul>
                    <li>Producto: {detalle.descripcion}</li>
                    <li>Precio: {detalle.precio}</li>
                    <li>Stock: {detalle.cantidad}</li>
                    <li>Medidas: {detalle.medida}</li>
                    <li>Con tiras: {detalle.tiras}</li>
                    <li>Con estampados: {detalle.estampada}</li>
                    <li><select> {detalle.colores.map(color => <option>{color}</option>)}</select></li>
                    <li><ItemCount stock={detalle.cantidad} cantidadInicial={1} onAdd={onAdd}/></li>
                </ul>
            </div>            
        </>
    )
}