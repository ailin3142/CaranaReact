import ItemCount from "../ItemCount"
import React from "react"
export default function ItemDetail({detalle}) {
    return (
        <>
            <div>
                <img src={detalle.url} alt="item" width={200} height={200} />
                <div>Producto: {detalle.descripcion}
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
                    Colores: {detalle.colores}
                </div>
                <ItemCount stock={detalle.cantidad} cantidadInicial={1}/>
            </div>
        </>
    )
}