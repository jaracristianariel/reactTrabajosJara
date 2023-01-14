import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-warning" role="alert">
                        <h1>Gracias por su Compra</h1>
                        <p>Su numero de Orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn boton">Volver al Inicio</Link>
                </div>
            </div>
        </div>

    )
}

export default ThankYou;