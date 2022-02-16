import React, { useState, useEffect, useContext } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getFirestore } from '../firebase/firebase'
import { contexto } from "./cart/CartContext";

export default function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams()
    const [saludo, setSaludo] = useState(greeting)
    const { actualizarStockProductos } = useContext(contexto);

    useEffect(() => {

        setSaludo(greeting.replace("{categoryId}", categoryId));

        const db = getFirestore();

        const itemCollection = categoryId !== undefined ? db.collection("items").where('categoria', '==', categoryId) : db.collection("items")

        itemCollection.get()
            .then((querySnapShot) => {

                if (querySnapShot.size === 0) {
                    console.log('no hay documentos con en ese query');
                    return
                }

                const itemsActualizar = querySnapShot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })

                actualizarStockProductos(itemsActualizar);
                setItems(itemsActualizar);
                setIsLoading(false);

            })
            .catch((err) => {
                console.log(err);
            })
    }, [greeting, categoryId, actualizarStockProductos])

    useEffect(() => {
        setIsLoading(true);
    }, [])

    return (
        <>
            <div className="greeting">
                <h1>{saludo}</h1>
                {!isLoading ?
                    <ItemList items={items} />
                    :
                    <div className="loader"></div>
                }
            </div>
        </>
    )
}