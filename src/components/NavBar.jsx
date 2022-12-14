import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"/img/logo.png"} alt={"logo"} width={50} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to={"/category/nosotros"}>Nosotros</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to={"/category/anillo-oro"}>Anillos de Oro</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to={"/category/anillo-plata"}>Anillos de Plata</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to={"/category/mas"}>Mas</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
} 

export default NavBar;