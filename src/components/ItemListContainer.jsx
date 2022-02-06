import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getFirestore } from '../firebase/firebase'

export default function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams()
    const [saludo, setSaludo] = useState(greeting)

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

                setItems(querySnapShot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                }
                ));
                setIsLoading(false);

            })
            .catch((err) => {
                console.log(err);
            })
    }, [greeting, categoryId])

    useEffect(() => {
        setIsLoading(true);
    }, [])

    return (
        <>
            <div class="greeting">
                <h1>{saludo}</h1>
                {!isLoading ?
                    <ItemList items={items} />
                    :
                    <div class="loader"></div>
                }
            </div>
        </>
    )
}