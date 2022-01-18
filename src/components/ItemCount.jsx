import {useState} from "react"

export default function ItemCount({stock, cantidadInicial}) {
    let [cantidadActual, setCantidadActual] = useState(cantidadInicial)
    let funcionDisminuir = () => {setCantidadActual(cantidadActual > cantidadInicial ? cantidadActual-1 : cantidadInicial)}
    let funcionIncrementar = () => {setCantidadActual(cantidadActual < stock ? cantidadActual+1 : stock)}
    return(
        <>
            <div class="itemCountContainer">
                <div class="controles">
                    <button type="button" onClick={funcionDisminuir}>-</button>
                    <p>{cantidadActual}</p>
                    <button type="button" onClick={funcionIncrementar}>+</button>
                </div>
                <button type="button">agregar al carrito</button>
            </div>
        </>
    )
}