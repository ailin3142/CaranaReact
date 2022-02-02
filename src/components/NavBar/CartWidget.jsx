import React from "react"

export default function CartWidget({buys}) {
    return(
        <>
            <div class="cartWidget" onClick= {() => window.open("/cart", "_self")}>
                <div>
                    <img src="../carrito.png" alt="carrito" width={30} height={30} />
                </div>
                <div>
                    <p>{buys}</p>
                </div>
            </div>
        </>
    )
}