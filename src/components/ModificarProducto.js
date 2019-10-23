import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const ModificarProducto = ({ history, guardaRecarga, producto }) => {

  //const producto = {}
  const [nombre, guardarNombre] = useState(producto.nombrePlatillo);
  const [precio, guardarPrecio] = useState(producto.precioPlatillo);
  const [catego, guardarCatego] = useState(producto.categoria);
  const [error, guardarError] = useState("");

  const modificarProducto = async e => {
    e.preventDefault();
    if (nombre === "" || precio === "" || catego === "") {
      guardarError(true);
    } else {
      guardarError(false);
      try {
        const result = await axios.put("http://localhost:4000/restaurant/"+producto.id, {
          nombrePlatillo: nombre,
          precioPlatillo: precio,
          categoria: catego
        });
        swal("¡Producto modificado!", {
          icon: "success",
        });
        guardaRecarga(true);
        history.push("/productos");
      } catch (error) {
        swal("¡Error!, El producto no pudo ser modificado, al parecer hay un problema con el servidor, intentelo mas tarde", {
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="ModifcarProducto">
      <div className="headerlista">
        <h3 className="">Modificar Producto #{producto.id}</h3>
      </div>
      <div className="lista formAgregar">
        {
          (error) ? 
          <div class="alert alert-dismissible alert-danger">
            <strong>¡Formuladio invalido!</strong>{" "}
            todos los campos son obligatorios
          </div>
          : null 
        }
        <div className="form-group">
          <label for="name">Nombre del Producto</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={e => guardarNombre(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="categoria">Categoria</label>
          <select
            multiple=""
            class="form-control"
            id="categoria"
            value={catego}
            onChange={e => guardarCatego(e.target.value)}
          >
            <option value="Comida">Comida</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Bebida">Bebida</option>
            <option value="Postre">Postre</option>
            <option value="Entrada">Entrada</option>
            <option value="Niños">Niños</option>
            <option value="Extra">Extra</option>
          </select>
        </div>
        <div className="form-group">
          <label for="precio">Precio</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            placeholder="Precio"
            value={precio}
            onChange={e => guardarPrecio(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={modificarProducto}
        >
          Modifcar
        </button>
      </div>
    </div>
  );
};

export default withRouter(ModificarProducto);
