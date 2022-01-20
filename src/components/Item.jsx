
export default function Item({item}) {
    return(
        <>
            <div>{item.id} {item.title} {item.price}</div>
            <img src={item.pictureUrl} alt="item" width={120} height={120} />
        </>
    )
}