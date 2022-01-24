import ItemCount from "../ItemCount"
import React from "react"
export default function ItemDetail({detalle}) {
    return (
        <>
            <div class="producto">
                <img src={detalle.url} alt="item" width={200} height={250} />
                <div class="detalleProducto">Producto: {detalle.descripcion}
                    <br></br> 
                    Precio: {detalle.precio} 
                    <br></br>
                    Stock: {detalle.cantidad}
                    <br></br>
                    Medidas: {detalle.medida}
                    <br></br>
                    Con tiras: {detalle.tiras}
                    <br></br>
                    Con estampados: {detalle.estampada}
                    <br></br>
                    <select>
                         {detalle.colores.map(color => <option>{color}</option>)}
                    </select>
                </div>
               
            </div>
            <div class="mensaje"><ItemCount stock={detalle.cantidad} cantidadInicial={1}/></div>
            
        </>
    )
}