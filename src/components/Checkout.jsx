import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, sumTotal, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const generarOrden =() => {
        const fecha = new Date();
        const orden = {
            buyer: {name:nombre, email:email, phone:telefono, adress:direccion},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal()
        };
        
        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenes");
        addDoc(ordenesCollection, orden).then((snapShot) => {
            setOrdenId(snapShot.id);
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono" placeholder="Ingrese su Telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" id="direccion" placeholder="Ingrese su Direccion" onInput={(e) => {setDireccion(e.target.value)}} />
                        </div>                        
                        <button type="button" className="btn bg-secondary text-white" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table class="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.nombre} width={50}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>                                    
                                </tr>                                
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma Total</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {ordenId ? <div class="alert alert-warning" role="alert">
                     <h3>Felicidades!</h3>
                     <p>Tu Numero de Orden es: {ordenId}</p>
                    </div> : "" };
                </div>
            </div>
        </div>
    )
}

export default Checkout;