import React from 'react';
import { Link } from 'react-router-dom';

const Encabezado = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/productos" className="navbar-brand">
                CRUD APP
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/productos" className="nav-link">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/agregarProducto" className="nav-link">Agregar</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
 
export default Encabezado;