import React from 'react';
import Producto from './Producto';

const Productos = ({productos, guardaRecarga}) => {
    return (
        <div className="Productos">
            <div className="headerlista">
                <h3 className="">Productos</h3>
            </div>
            <div className="lista">
            {
                productos.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        guardaRecarga={guardaRecarga}
                    />
                ))
            }
            </div>
        </div>
    );
}
 
export default Productos;