import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

export default function ItemListContainer({greeting}) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {categoryId} = useParams()
    const [saludo, setSaludo] = useState(greeting)
    
    useEffect( () => {
        const productos = [
            {id:'1', title:'Bolsa de friselina reforzada', categoria:'bolsa', price: 100, cantidad: 20, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
            {id:'2', title:'Bolsa de friselina', categoria:'bolsa', price: 100, cantidad: 20, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
            {id:'3', title:'Bolson', categoria:'bolsa', price: 100, cantidad: 20, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
            {id:'4', title:'Funda Traje', categoria:'funda', price: 150, cantidad: 10, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_883176-MLA43188162292_082020-F.webp'},
            {id:'5', title:'Funda Vestido', categoria:'funda', price: 200, cantidad: 5, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_763695-MLA31120267121_062019-O.jpg'},
            {id:'6', title:'Funda Kids', categoria:'funda', price: 100, cantidad: 7, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_883176-MLA43188162292_082020-F.webp'},
            {id:'7', title:'Morral', categoria:'mochila', price: 300, cantidad: 25, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_718752-MLA48842789491_012022-F.webp'},
            {id:'8', title:'Mochila Jardin', categoria:'mochila', price: 150, cantidad: 25, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_793483-MLA48892368389_012022-F.webp'},
            {id:'9', title:'Mochila', categoria:'mochila', price: 500, cantidad: 25, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_911968-MLA31583471405_072019-F.webp'}
        ]
        
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
        setIsLoading(true);
        productosEnStock.then ( res => {
            setItems(res);
            setIsLoading(false);
        })
        .catch( error => {
            console.log(error);
        })
    }, [greeting, categoryId])

    return(
        <>
            <div class="greeting">
                <h1>{saludo}</h1>
                {!isLoading ?
                    <ItemList items={items}/>
                    :
                    <div class="loader"></div>
                }
            </div>
        </>
    )
}