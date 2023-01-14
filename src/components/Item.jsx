import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-black">
            <div className="card border border-0">
                <img src={item.img} className="card-img-top" alt={item.nombre}/>
                <div className="card-body text-center">
                    <h4 className="card-text">{item.nombre}</h4>
                </div>
                <div className="card-body text-center ">
                    <p className="card-text"> <b>${item.precio}</b></p>
                </div>
            </div>
        </Link>
    )
}
export default Item;
