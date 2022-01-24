import Item from "./Item"
import React from "react"

export default function ItemList({items}) {
    return<ul>
            {items.map(item => <li><Item item={item}/></li> )}
        </ul>
}