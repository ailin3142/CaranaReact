import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const {id} = useParams()

    const productos = [
        {id:'1', descripcion:'Bolsa de friselina reforzada', categoria:'bolsa', medida: '50 cm x 60 cm', precio: 100, cantidad: 20, colores: ['rojo', 'azul', 'negro', 'blanco'], tiras: 'Si', estampada: 'Si', url: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
        {id:'2', descripcion:'Bolsa de friselina', categoria:'bolsa', medida: '40 cm x 40 cm', precio: 100, cantidad: 20, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'No', url: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
        {id:'3', descripcion:'Bolson', categoria:'bolsa', medida: '90 cm x 60 cm', precio: 100, cantidad: 20, colores: ['negro', 'blanco'], tiras: 'Si', estampada: 'No', url: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
        {id:'4', descripcion:'Funda Traje', categoria:'funda', medida: '100 cm x 60 cm', precio: 150, cantidad: 10, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'Si', url: 'https://http2.mlstatic.com/D_NQ_NP_2X_883176-MLA43188162292_082020-F.webp'},
        {id:'5', descripcion:'Funda Vestido', categoria:'funda', medida: '180 cm x 50 cm', precio: 200, cantidad: 5, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'Si', url: 'https://http2.mlstatic.com/D_NQ_NP_763695-MLA31120267121_062019-O.jpg'},
        {id:'6', descripcion:'Funda Kids', categoria:'funda', medida: '50 cm x 50 cm', precio: 100, cantidad: 7, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'Si', url: 'https://http2.mlstatic.com/D_NQ_NP_2X_883176-MLA43188162292_082020-F.webp'},
        {id:'7', descripcion:'Morral', categoria:'mochila', medida: '40 cm x 40 cm', precio: 300, cantidad: 25, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'No', url: 'https://http2.mlstatic.com/D_NQ_NP_2X_718752-MLA48842789491_012022-F.webp'},
        {id:'8', descripcion:'Mochila Jardin', categoria:'mochila', medida: '40 cm x 40 cm', precio: 150, cantidad: 25, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'No', url: 'https://http2.mlstatic.com/D_NQ_NP_2X_793483-MLA48892368389_012022-F.webp'},
        {id:'9', descripcion:'Mochila', categoria:'mochila', medida: '80 cm x 40 cm', precio: 500, cantidad: 25, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'No', url: 'https://http2.mlstatic.com/D_NQ_NP_2X_911968-MLA31583471405_072019-F.webp'}
    ]

    const getItem = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    });
    
    useEffect( () => {
        getItem.then ( res => {
            const producto = res.find( prod => prod.id === id);
            setItem(producto);
            setLlegoPromesa(true);
        })
        .catch( error => {
            console.log(error);
        })
    })

    return (
        <>
            <div class="greeting">
            <h1>Detalle</h1>
            {llegoPromesa ?
                <ItemDetail detalle={item} />
                :
                <div class="loader"></div>
            }
            </div>
        </>
    )
}