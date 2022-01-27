import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

export default function ItemListContainer({greeting}) {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams()
    const [saludo, setSaludo] = useState(greeting)

    const productos = [
        {id:'1', title:'Bolsa de friselina reforzada', categoria:'bolsa', price: 100, cantidad: 20, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
        {id:'2', title:'Bolsa de friselina', categoria:'bolsa', price: 100, cantidad: 20, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
        {id:'3', title:'Bolson', categoria:'bolsa', price: 100, cantidad: 20, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
        {id:'4', title:'Funda Traje', categoria:'funda', price: 150, cantidad: 10, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_883176-MLA43188162292_082020-F.webp'},
        {id:'5', title:'Funda Vestido', categoria:'funda', price: 200, cantidad: 5, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_763695-MLA31120267121_062019-O.jpg'},
        {id:'6', title:'Funda Kids', categoria:'funda', price: 100, cantidad: 7, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_883176-MLA43188162292_082020-F.webp'},
        {id:'7', title:'Morral', categoria:'mochila', price: 300, cantidad: 25, pictureUrl: 'data:image/jpeg;base64,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'},
        {id:'8', title:'Mochila Jardin', categoria:'mochila', price: 150, cantidad: 25, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_793483-MLA48892368389_012022-F.webp'},
        {id:'9', title:'Mochila', categoria:'mochila', price: 500, cantidad: 25, pictureUrl: 'data:image/jpeg;base64,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'}
    ]
    
    useEffect( () => {
        setItems([]);
        setSaludo(greeting.replace("{categoryId}", categoryId));
        const productosEnStock = new Promise((resolve, reject) => {
            setTimeout( () => {
                if (categoryId) {
                    resolve(productos.filter( prod => prod.categoria === categoryId));
                } else {
                    resolve(productos);
                }
               }, 2000)
        });

        productosEnStock.then ( res => {
            setItems(res);
        })
        .catch( error => {
            console.log(error);
        })
    }, [greeting, categoryId, productos])

    return(
        <>
            <div class="greeting">
                <h1>{saludo}</h1>
                {items.length > 0 ?
                    <ItemList items={items}/>
                    :
                    <div class="loader"></div>
                }
            </div>
        </>
    )
}