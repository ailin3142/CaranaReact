import React from "react"
import { NavLink } from "react-router-dom"

export default function CartWidget({buys}) {
    return(
        <>
            <NavLink to={"/cart"}><div class="cartWidget">
                <div>
                    <img src="../carrito.png" alt="carrito" width={30} height={30} />
                </div>
                <div>
                    <p>{buys}</p>
                </div>
            </div>
            </NavLink>
        </>
    )
}