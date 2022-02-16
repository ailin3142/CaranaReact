import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import ItemDetail from "./ItemDetail";
import { contexto } from "../cart/CartContext";

export default function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const {id} = useParams()
    const { actualizarStock } = useContext(contexto);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc(id);
    
        miItem.get()
          .then((doc) => {    
            if (!doc.exists) {
              console.log('no existe ese documento');
              return
            }
    
            const producto = { id: doc.id, ...doc.data() };
            actualizarStock(producto);
            setItem(producto);
            setLlegoPromesa(true);
          })
          .catch((err)=>{
            console.log(err);
          })
      }, [id, actualizarStock]);

    return (
        <>
            <div className="greeting"></div>
            <h1>Detalle</h1>
            {llegoPromesa ?
                <ItemDetail detalle={item} />
                :
                <div className="loader" />
            }
        </>
    )
}