import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);


    return cartTotal() ? <Link to={"/Cart"} className="btn position-relative" title="Ir al Carrito">        
            <img src={"/img/carrito.svg"} alt={"carrito"} width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill boton">{cartTotal()}</span>
        </Link> : "";

    
}

export default CartWidget;