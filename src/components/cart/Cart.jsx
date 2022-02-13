import React, { useContext, useState } from "react"
import { contexto } from "../cart/CartContext";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import firebase from "firebase";

export default function Cart() {
    const { removeItem, clear, carrito } = useContext(contexto);
    const [mostrarModal, setMostrarModal] = useState(false);

    const precioTotal = carrito.reduce(function (acc, obj) { return acc + obj.precio * obj.cantidad; }, 0);

    const estiloBoton = {
        backgroundImage: "url('https://png.pngitem.com/pimgs/s/200-2009349_transparent-trash-icon-png-trash-icon-png-png.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 24,
        height: 24
    }
    
    const comprar = (buyer) => {
        setMostrarModal(false);
        const orden = {
            buyer: buyer,
            items: carrito,
            total: precioTotal,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(orden);
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
                                        <li>Producto: {producto.descripcion}</li>
                                        <li>Cantidad: {producto.cantidad}</li>
                                        <li>Precio Unitario: {producto.precio}</li>
                                    </ul>
                                    <button style={estiloBoton} onClick={() => { removeItem(producto.id) }}></button>
                                </div>
                            </li>)}
                    </ul>
                    <h2>Precio Total: {precioTotal}</h2>
                    <button onClick={clear} className="Button"> Eliminar todo el carrito </button>
                    <button onClick={() => setMostrarModal(true)} className="Button"> Comprar productos </button>
                </>
                :
                <Link to="/"> Ir al catalogo</Link>
            }
        </div >
        </>
    )
}