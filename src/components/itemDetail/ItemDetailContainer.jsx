import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const {id} = useParams()
    
    const getItem = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve([
                {id:'1', descripcion:'Bolsa de friselina reforzada', medida: '50 cm x 60 cm', precio: 100, cantidad: 20, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'Si', url: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'},
                {id:'2', descripcion:'Funda', medida: '100 cm x 100 cm', precio: 50, cantidad: 10, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'Si', url: 'https://http2.mlstatic.com/D_NQ_NP_2X_883176-MLA43188162292_082020-F.webp'},
                {id:'3', descripcion:'Morral', medida: '40 cm x 40 cm', precio: 300, cantidad: 25, colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'], tiras: 'Si', estampada: 'No', url: 'data:image/jpeg;base64,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'}
                ])
        }, 2000)
    });
    
    useEffect( () => {
        getItem.then ( res => {
            console.log(res);
            console.log({id});
            const producto = res.find( prod => prod.id === id);
            console.log(producto);
            setItem(producto);
            setLlegoPromesa(true);
        })
        .catch( error => {
            console.log(error);
        })
    })

    return (
        <>
            {llegoPromesa ?
                <ItemDetail detalle={item} />
                :
                <div class="cargando">Cargando detalle del producto...</div>
            }
        </>
    )
}