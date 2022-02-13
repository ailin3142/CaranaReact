import React, { useRef } from "react"

export default function Modal({ handleClose, show }) {
    const nombreRef = useRef();
    const telRef = useRef();
    const emailRef = useRef();
    const campos = [{ titulo: "Nombre y Apellido", ref: nombreRef },
                    { titulo: "Telefono", ref: telRef },
                    { titulo: "Email", ref: emailRef }];
    // revisar uso                
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const inputs = campos.map(function (item) {
        return (
            <ul key={item.titulo}>
                <li>
                    <span>{item.titulo}</span>
                    <input type="text" ref={item.ref} placeholder={item.titulo}/>
                    <br />
                </li>
            </ul>
        )
    });

    const generarComprador = () => {
        if (nombreRef.current.value === "" || telRef.current.value === "" || emailRef.current.value === "") { return; }
        const buyer = {
            name: nombreRef.current.value,
            phone: telRef.current.value,
            email: emailRef.current.value
        }

        handleClose(buyer);
    }
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h2> Datos del cliente </h2>
                {inputs}
                <button type="button" onClick={() => generarComprador()}> Realizar compra </button>
            </section>
        </div>
    );
}