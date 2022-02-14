import Item from "./Item"
import React from "react"

export default function ItemList({items}) {
    return (
        <div className="grid">
            {items.map(item => <Item key={item.id} item={item}/> )}
        </div>
        )
    
}