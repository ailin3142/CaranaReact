import React, { createContext, useState } from "react";

export const contexto = createContext();

export default function CartContext({ children }) {

    const [carrito, setCarrito] = useState([]);
    
    const addItem = (producto, cantidad) => {
        if (!isInCart(producto.id)){
            producto.cantidad = cantidad;
            setCarrito([...carrito, producto]);
        } else {
            let prod = findProduct(producto.id);
            prod.cantidad += cantidad;
        }
    }

    const removeItem = (productoId) => {
        setCarrito( carrito.filter(prod => prod.id !== productoId ));
    }
    
    const clear = () => {
        setCarrito([]);
    }

    const isInCart = (productoId) => {
       return findProduct(productoId) !== undefined;
    }

    const findProduct = (productoId) => {
        return carrito.find( prod => prod.id === productoId);
    }

    return (
        <>
            <contexto.Provider value={{addItem, removeItem, clear, carrito}}>
                {children}
            </contexto.Provider> 

        </>
    );
}