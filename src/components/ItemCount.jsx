import {useState} from "react"

export default function ItemCount({stock, cantidadInicial}) {
    const [cantidadActual, setCantidadActual] = useState(cantidadInicial)
    const funcionDisminuir = () => {setCantidadActual(cantidadActual > cantidadInicial ? cantidadActual-1 : cantidadInicial)}
    const funcionIncrementar = () => {setCantidadActual(cantidadActual < stock ? cantidadActual+1 : stock)}
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