import React, { useContext, useState } from "react"
import { contexto } from "../cart/CartContext";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase/firebase";
import Especificacion from "../itemDetail/Especificacion";

export default function Cart() {
    const { removeItem, clear, carrito } = useContext(contexto);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [orderId, setOrderId] = useState("");

    const precioTotal = carrito.reduce(function (acc, obj) { return acc + obj.precio * obj.cantidad; }, 0);

    const estiloBoton = {
        backgroundImage: "url('https://png.pngitem.com/pimgs/s/200-2009349_transparent-trash-icon-png-trash-icon-png-png.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 24,
        height: 24,
        margin:(0,0,0,10)
    }

    const comprar = (buyer) => {
        setMostrarModal(false);
        const orden = {
            buyer: buyer,
            items: carrito,
            total: precioTotal,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        almacenarOrden(orden);
    }

    const almacenarOrden = (orden) => {
        const db = getFirestore();
        const orders = db.collection("orders");

        orders.add(orden)
            .then(({ id }) => {
                setOrderId(id);
                clear();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Modal handleClose={comprar} show={mostrarModal} />
            <div className="greeting">
                <h1> Carrito </h1>
                {carrito.length > 0 ?
                    <>
                        <ul>
                            {carrito.map(producto =>
                                <li className="itemCart" key={producto.id}>
                                    <div className="carrito">
                                        <ul>
                                            <li><Especificacion titulo="Producto:" descripcion={producto.descripcion} /></li>
                                            <li><Especificacion titulo="Cantidad:" descripcion={producto.cantidad} /></li>
                                            <li><Especificacion titulo="Precio Unitario:" descripcion={producto.precio} /></li>
                                        </ul>
                                        <button style={estiloBoton} onClick={() => { removeItem(producto.id) }}></button>
                                    </div>
                                </li>)}
                        </ul>
                        <Especificacion titulo="Precio Total:" descripcion={precioTotal} />
                        <button onClick={clear} className="botonOscuro"> Eliminar todo el carrito </button>
                        <br />
                        <button className="botonOscuro" onClick={() => setMostrarModal(true)}> Comprar productos </button>
                    </>
                    :
                    <Link to="/"><button className="botonOscuro"> Ir al catalogo</button></Link>
                }
            </div >
            {orderId !== "" ? <h3 className="greeting">Felicitaciones su referencia de compra es {orderId}</h3> : <></>}
        </>
    )
}