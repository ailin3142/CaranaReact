import ItemCount from "./ItemCount"

export default function ItemListContainer({greeting}) {
    return(
        <>
            <div class="greeting">
                <h1>{greeting}</h1>
                <ItemCount stock={4} cantidadInicial={1}/>
            </div>
        </>
    )
}