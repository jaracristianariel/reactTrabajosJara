import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const sumarCantidad = () =>{
        if (counter < itemStock) {
            setCounter(counter + 1);
        }        
    }
    
    const restarCantidad = () =>{
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = (quantity) =>{
        setItemStock(itemStock - quantity);
        setVendido(true);
        onAdd(quantity);
     
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])


    return (
        <div className="container text-center">
            <div className="row mb-2">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn boton" onClick={restarCantidad}>-</button>
                        <button type="button" className="btn boton">{counter}</button>
                        <button type="button" className="btn boton" onClick={sumarCantidad}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn boton">Terminar mi Compra</Link> : <button className="btn boton" onClick={() => {addToCart(counter)}}>Agregar Al Carrito</button>}
                </div>
                <div>
                    <Link to={"/"} className="btn boton m-2">Seguir Comprando</Link>
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount;