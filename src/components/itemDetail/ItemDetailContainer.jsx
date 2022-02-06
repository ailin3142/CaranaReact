import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [item, setItem] = useState();
    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const {id} = useParams()
    
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
    
            setItem({ id: doc.id, ...doc.data() });
            setLlegoPromesa(true);
          })
          .catch((err)=>{
            console.log(err);
          })
      }, [id]);

    return (
        <>
            <div class="greeting"></div>
            <h1>Detalle</h1>
            {llegoPromesa ?
                <ItemDetail detalle={item} />
                :
                <div class="loader" />
            }
        </>
    )
}