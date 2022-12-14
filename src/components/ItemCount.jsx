import React, { useEffect, useState }  from "react";

const ItemCount = ({cantidadStock}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(cantidadStock);
    
    const sumarCantidad = () =>{
        if (counter < stock) {
            setCounter(counter + 1);
        }        
    }
    
    const restarCantidad = () =>{
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () =>{
        if (counter <= stock) {
            
            setStock(stock - counter);
            setCounter(0);
            console.log("Agregaste " + counter + " productos al carrito");
        }        
    }



    return (
        <div className="container text-center">
            <div className="row mb-2">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarCantidad}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={sumarCantidad}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-outline-primary" onClick={onAdd}>Agregar Al Carrito</button>
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount;