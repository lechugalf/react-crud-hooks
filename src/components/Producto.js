import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Producto = ({producto, guardaRecarga}) => {

/*     const handleOnDelete = (productoId) => {
        onDelete(productoId);
        guardaRecarga(true)
    } */

    const eliminarProducto = (id) => {
        swal({
            title: "¿Estas seguro de eliminar el producto?",
            text: "¡Una vez eliminado, No podrás recuperarlo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                const url = `http://localhost:4000/restaurant/${id}`;
                axios.delete(url)
                    .then(result => {
                        swal("Producto eliminado con éxito", {
                            icon: "success",
                        });
                        guardaRecarga(true);
                    })
                    .catch((err) => {
                        swal("Error, el producto no pudo ser eliminado", {
                            icon: "error",
                        });
                    })
            }
        });
    }

    return (
        <div className="card border-primary" style={{'maxWidth': '20rem'}}>
            <div className="card-header">{producto.categoria}
                <div className="card-body">
                    <h4 className="card-title">{producto.nombrePlatillo}</h4>
                    <p className="card-text">$ {producto.precioPlatillo}</p>
                </div>
                <Link
                    to={`/producto/modificar/${producto.id}`}
                    className="btn btn-success mr-2"
                >
                    Editar 
                </Link>
                <button type="button" className="btn btn-danger"
                    onClick={() => eliminarProducto(producto.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
 
export default Producto;