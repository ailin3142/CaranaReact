import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);

    const getItem = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve({id:1,
                    descripcion:'Bolsa de friselina reforzada',
                    medida: '50 cm x 60 cm',
                    precio: 100,
                    cantidad: 20,
                    colores: ['rojo', 'azul', 'violeta', 'fucsia', 'negro', 'blanco', 'verde'],
                    tiras: 'Si',
                    estampada: 'Si',
                    url: 'https://http2.mlstatic.com/D_NQ_NP_839144-MLA45058582893_032021-O.webp'}
        )}, 2000)
    });
    
    useEffect( () => {
        getItem.then ( res => {
            setLlegoPromesa(true);
            setItem(res);
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
                <div>Cargando detalle del producto...</div>
            }
        </>
    )
}