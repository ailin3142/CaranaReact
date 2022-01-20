import { useState, useEffect } from "react/cjs/react.development"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

export default function ItemListContainer({greeting}) {
    const [llegoPromesaItems, setLlegoPromesaItems] = useState(false);
    const [items, setItems] = useState([]);

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve([{id:1, title:'bolsa', price:100, pictureUrl:''},
                     {id:2, title:'funda', price:50, pictureUrl:''},
                     {id:3, title:'morral', price:300, pictureUrl:''}])
        }, 2000)
    });
    
    useEffect( () => {
        productosEnStock.then ( res => {
            setLlegoPromesaItems(true);
            setItems(res);
        })
        .catch( error => {
            console.log(error);
        })
    })

    return(
        <>
            <div class="greeting">
                <h1>{greeting}</h1>
                <ItemCount stock={4} cantidadInicial={1}/>
                {llegoPromesaItems ?
                    <ItemList items={items}/>
                    :
                    <div>Cargando Productos...</div>
                }
                
            </div>
        </>
    )
}